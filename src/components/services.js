import { render } from 'lit-html';
import {
  saveCaseLayout, reviewLayout, mainLayout, createCaseLayout, genPageValidationErrors,
} from '../views/views';
import { setFormData, setFormInlineError } from '../utils/form-utils';
import { showDataList, LoadingIndicator } from '../views/fields';
import PegaElement from './element';

/**
 * This interface is responsible for fetching the data and sending the data to the Pega Platform using the DX API
 * It will update the case-data element using the lit-html render function
 *
 */
export default class PegaServices extends PegaElement {
  /* Clear the loading indicator */
  clearLoadingIndicator() {
    const el = this.getRenderRoot().querySelector('#case-data');
    if (el && el.querySelector('.loading') !== null) {
      render(null, el);
    }
  }

  /* Send an external event outside of the element */
  sendExternalEvent(type) {
    this.dispatchEvent(
      new CustomEvent('message', {
        detail: { type },
      }),
    );
  }

  /* Generic handler for error message */
  genErrorMessage(error) {
    this.clearLoadingIndicator();
    if (error.message && error.message.indexOf('JSON.parse') !== -1) {
      console.error('Error:', error);
    } else if (error.message && error.message.indexOf('Unexpected token') !== -1) {
      this.errorMsg = 'Error 404: Resource not found';
      this.performUpdate();
      console.error(this.errorMsg);
    } else {
      if (error.status) {
        if (error.statusText !== '') {
          this.errorMsg = `Error ${error.status}: ${error.statusText}`;
        } else if (error.status === 401) {
          this.errorMsg = 'Error 401: Authentication error';
        } else if (error.status === 500) {
          this.errorMsg = 'Error 500: Internal server error';
        } else {
          this.errorMsg = `Error ${error.status}`;
        }
      } else if (error.name && error.message) {
        this.errorMsg = `Error ${error.name}: ${error.message}`;
      } else if (typeof error === 'string') {
        this.errorMsg = error;
      } else {
        this.errorMsg = 'Critical error';
      }
      this.performUpdate();
      console.error('Error:', error);
    }
  }

  /**
   * fetch the data using the DX API
   *
   */
  fetchData(type, props) {
    const {
      id, actionid, target, element,
    } = props || {};
    let authToken = `Basic ${btoa(`${this.username}:${this.password}`)}`;
    if (this.token !== '') {
      authToken = `Bearer ${this.token}`;
    }
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: authToken,
    };
    const reqHeaders = {
      method: 'GET',
      headers,
    };
    let apiurl = `${this.url}/api/v1/`;
    switch (type) {
      case 'worklist':
        apiurl += 'assignments';
        break;
      case 'casetypes':
        apiurl += 'casetypes';
        break;
      case 'newwork':
        apiurl += `casetypes/${id}`;
        break;
      case 'assignment':
        apiurl += `assignments/${id}`;
        break;
      case 'case':
        apiurl += `cases/${id}`;
        break;
      case 'data':
        apiurl += `data/${id}`;
        break;
      case 'page':
        apiurl += `cases/${id}/pages/${actionid}`;
        break;
      case 'view':
        apiurl += `cases/${id}/views/${actionid}`;
        break;
      case 'assignmentaction':
        apiurl += `assignments/${id}/actions/${actionid}`;
        break;
      case 'caseaction':
        apiurl += `cases/${id}/actions/${actionid}`;
        break;
    }
    fetch(apiurl, reqHeaders)
      .then((res) => {
        if (type === 'case') {
          this.etag = res.headers.get('etag');
          if (target) {
            target.disabled = false;
            target.textContent = 'Save';
          }
        }
        if (res.ok || res.status === 404) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((response) => {
        try {
          if (response.errors && response.errors.length > 0) {
            this.errorMsg = `Error ${response.errors[0].ID}: ${response.errors[0].message}`;
            this.clearLoadingIndicator();
            this.performUpdate();
            console.error('Error:', response);
            return;
          }
          const el = this.getRenderRoot().querySelector('#case-data');
          switch (type) {
            case 'casetypes':
              this.casetypes = {};
              for (const caseTypeIdx in response.caseTypes) {
                const obj = response.caseTypes[caseTypeIdx];
                /* If the action is worklist and the createCase is set on the mashup component, we need to filter the list */
                if (this.action !== 'workList' || this.casetype === '' || this.casetype === obj.ID) {
                  this.casetypes[obj.ID] = {
                    canCreate: obj.CanCreate,
                    name: obj.startingProcesses[0].name,
                    requiresFieldsToCreate: obj.startingProcesses[0].requiresFieldsToCreate,
                  };
                }
              }
              if (this.action === 'createNewWork') {
                this.createCase();
              }
              break;
            case 'worklist':
              this.cases = response.assignments;
              this.requestUpdate();
              break;
            case 'assignment':
              this.data = response;
              this.caseID = response.caseID;
              this.fetchData('case', { id: this.caseID });
              if (response.actions.length > 0 && response.actions[0].ID) {
                this.actionID = response.actions[0].ID;

                this.fetchData('assignmentaction', { id, actionid: this.actionID });
              } else {
                this.fetchData('view', { id: this.caseID, actionid: 'pyCaseInformation' });
              }
              break;
            case 'case':
              this.casedata = response;
              if (this.name === '') {
                this.name = this.casedata.content.pyLabel;
              }
              this.casepyStatusWork = this.casedata.content.pyStatusWork;
              this.requestUpdate();
              if (this.assignmentID === '') {
                this.fetchData('view', { id: this.caseID, actionid: 'pyCaseInformation' });
              }
              break;
            case 'data':
              this.dataPages[id] = response;
              if (!element.nextElementSibling) {
                console.error('Error: case data are not present when retrieving the data');
                break;
              }
              render(showDataList(response), element.nextElementSibling);
              break;
            case 'caseaction':
              if (!el) {
                console.error('Error: case data are not present when retrieving the assignmentaction');
                break;
              }
              render(saveCaseLayout(response.view.groups, 'Obj', this.bShowCancel === 'true' ? this.actionAreaCancel : null, this.actionAreaSave), el);
              el.focus();
              break;
            case 'assignmentaction':
              this.name = response.name;
              if (!el) {
                console.error('Error: case data are not present when retrieving the assignmentaction');
                break;
              }
              this.requestUpdate();
              render(mainLayout(response.view.groups, 'Obj', this.bShowCancel === 'true' ? this.actionAreaCancel : null, this.actionAreaSave), el);
              el.focus();
              break;
            case 'page':
              if (!el) {
                console.error('Error: case data are not present when retrieving the page');
                break;
              }
              render(mainLayout(response.groups, 'Obj'), el);
              el.focus();
              break;
            case 'view':
              if (!el) {
                console.error('Error: case data are not present when retrieving the page');
                break;
              }
              this.content = {};
              if (actionid === 'pyCaseInformation') {
                this.name = response.name;
                render(reviewLayout(response.groups, 'Obj', this.bShowCancel === 'true' ? this.actionAreaCancel : null), el);
              } else {
                this.name = response.name;
                render(mainLayout(response.groups, 'Obj'), el);
              }
              el.focus();
              break;
            case 'newwork':
              this.content = {};
              if (!el) {
                console.error('Error: case data are not present when retrieving the newwork');
                break;
              }
              render(createCaseLayout(response.creation_page.groups[0].layout.groups, 'Obj', this.bShowCancel === 'true' ? this.actionAreaCancel : null), el);
              el.focus();
              const form = this.getRenderRoot().querySelector('#case-data');
              if (form) {
                setFormData(form, this.initialContent);
              }
              break;
          }
        } catch (e) {
          this.errorMsg = `Error: ${e}`;
          this.performUpdate();
          console.error('Error:', e);
        }
      })
      .catch((error) => {
        this.genErrorMessage(error);
      });
  }

  sendData(type, props) {
    const {
      id, actionid, target, refreshFor,
    } = props;
    let authToken = `Basic ${btoa(`${this.username}:${this.password}`)}`;
    if (this.token !== '') {
      authToken = `Bearer ${this.token}`;
    }
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: authToken,
    };
    const reqHeaders = {
      method: 'POST',
      headers,
    };
    let apiurl = `${this.url}/api/v1/`;
    this.validationMsg = '';
    switch (type) {
      case 'newwork':
        apiurl += 'cases';
        reqHeaders.body = JSON.stringify({
          content: this.content,
          caseTypeID: id,
        });
        break;
      case 'submitassignment':
        apiurl += `assignments/${id}?actionID=${actionid}`;
        reqHeaders.body = JSON.stringify({
          content: this.content,
        });
        break;
      case 'savecase':
        apiurl += `cases/${id}`;
        if (actionid && actionid !== '') {
          apiurl += `?actionID=${actionid}`;
        }
        reqHeaders.headers['If-Match'] = this.etag;
        reqHeaders.method = 'PUT';
        reqHeaders.body = JSON.stringify({
          content: this.content,
        });
        break;
      case 'refreshnew':
        apiurl += `casetypes/${id}/refresh`;
        if (refreshFor && refreshFor !== '') {
          apiurl += `?refreshFor=${refreshFor}`;
        }
        reqHeaders.headers['If-Match'] = this.etag;
        reqHeaders.method = 'PUT';
        reqHeaders.body = JSON.stringify({
          content: this.content,
        });
        break;
      case 'refreshassignment':
        apiurl += `assignments/${id}/actions/${actionid}/refresh`;
        if (refreshFor && refreshFor !== '') {
          apiurl += `?refreshFor=${refreshFor}`;
        }
        reqHeaders.headers['If-Match'] = this.etag;
        reqHeaders.method = 'PUT';
        reqHeaders.body = JSON.stringify({
          content: this.content,
        });
        break;
      case 'refreshcase':
        apiurl += `cases/${id}/actions/${actionid}/refresh`;
        if (refreshFor && refreshFor !== '') {
          apiurl += `?refreshFor=${refreshFor}`;
        }
        reqHeaders.headers['If-Match'] = this.etag;
        reqHeaders.method = 'PUT';
        reqHeaders.body = JSON.stringify({
          content: this.content,
        });
        break;
    }
    fetch(apiurl, reqHeaders)
      .then((res) => {
        if (res.status === 200 || res.status === 201 || (res.status >= 400 && res.status < 500)) {
          return res.json();
        }
        if (res.ok) {
          return Promise.resolve('ok');
        }
        return Promise.reject(res);
      })
      .then((response) => {
        if (response.errors && response.errors.length > 0) {
          /* Only look at the first error... not sure if the other errors are relevant */
          if (response.errors[0].ValidationMessages) {
            const form = this.getRenderRoot().querySelector('#case-data');
            setFormInlineError(form, response.errors[0].ValidationMessages);
            this.validationMsg = genPageValidationErrors(response);
          } else {
            this.errorMsg = `Error ${response.errors[0].ID}: ${response.errors[0].message}`;
          }
          this.clearLoadingIndicator();
        } else {
          const el = this.getRenderRoot().querySelector('#case-data');
          if (type === 'refreshcase' || type === 'refreshassignment' || type === 'refreshnew') {
            if (!el) {
              console.error('Error: case data are not present');
              return;
            }
            if (type === 'refreshnew') {
              render(createCaseLayout(response.creation_page.groups[0].layout.groups, 'Obj', this.bShowCancel === 'true' ? this.actionAreaCancel : null), el);
            } else {
              render(mainLayout(response.view.groups, 'Obj', this.actionAreaCancel, this.actionAreaSave), el);
            }
          } else if (type === 'savecase') {
            this.sendExternalEvent(type);
            this.fetchData('case', { id: this.caseID, target });
            if (this.assignmentID !== '') {
              this.fetchData('assignment', { id: this.assignmentID });
            }
          }
          if (response.ID) {
            this.caseID = response.ID;
          }
          if (response.nextAssignmentID) {
            if (el) {
              render(LoadingIndicator(), el);
              this.performUpdate();
            }
            this.bShowNew = false;
            this.assignmentID = response.nextAssignmentID;
            this.sendExternalEvent(type);
            this.fetchData('assignment', { id: this.assignmentID });
          } else if (response.nextPageID) {
            if (el) {
              render(LoadingIndicator(), el);
              this.performUpdate();
            }
            this.sendExternalEvent(type);
            if (response.nextPageID === 'Confirm' || response.nextPageID === 'Review') {
              this.bShowConfirm = true;
              this.fetchData('view', { id: this.caseID, actionid: 'pyCaseInformation' });
              this.fetchData('case', { id: this.caseID }); /* To get the updated status */
            } else {
              this.fetchData('page', { id: this.caseID, actionid: response.nextPageID });
            }
          }
        }
        this.requestUpdate();
      })
      .catch((error) => {
        this.genErrorMessage(error);
      });
  }
}

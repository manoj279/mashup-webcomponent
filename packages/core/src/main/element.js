import { LitElement } from 'lit-element';
import { render } from 'lit-html';
import { unescapeHTML } from '../utils/form-utils';

export default class PegaElement extends LitElement {
  static get properties() {
    return {
      url: {},
      caseID: {}, /* only used if the actions openAssignment or openWorkByHandle are used */
      username: {}, /* Username for authentication  */
      password: {}, /* This is for development and test only - use JWT token or oauth instead */
      title: {}, /* Title of the my worklist card  */
      bShowCreate: {}, /* Show the create button inside the worklist - if showing the worklist, you can filter the list of cases you can
                              create by setting the value of casetype  */
      bShowCancel: {}, /* hide the close or cancel actions when the action type is not workList  */
      bShowAttachments: {}, /* hide the attachments button  */
      bShowSave: {}, /* hide the save action  */
      authentication: {}, /* Authentication type - supported values: basic, jwttoken, oauth2password, oauth2clientcredentials  */
      token: {}, /* JWT Token for authentication  */
      clientid: {}, /* oAuth clientid for authentication  */
      clientsecret: {}, /* oAuth clientsecret for authentication  */
      initialContent: {}, /* Initial content when creating a new case - you can pass an object as { prop1: 'value1', prop2: 'value2' }  */
      action: {}, /* 4 actions supported: createNewWork, workList, openAssignment and openWorkByHandle */
      casetype: {}, /* only used if the action createNewWork is used */
      portalName: {}, /* Name of the portal - only required for the v2 api to get the list of case types and your worklist */
      langTokens: {}, /* Language token - you can pass an object as { prop1: 'value1', prop2: 'value2' } */
    };
  }

  constructor() {
    super();
    this.url = '';
    this.title = 'My worklist';
    this.caseID = '';
    this.username = '';
    this.password = '';
    this.bShowCreate = 'true';
    this.bShowCancel = 'true';
    this.bShowAttachments = 'false';
    this.bShowSave = 'true';
    this.authentication = '';
    this.token = '';
    this.clientid = '';
    this.clientsecret = '';
    this.initialContent = '';
    this.action = '';
    this.casetype = '';
    this.portalName = '';
    this.cases = []; /* List of all the cases in your worklist */
    this.dataPages = {}; /* Cache of all the DP requested - key is the name of the DP */
    this.name = ''; /* Name of the current case that is being processed */
    this.etag = ''; /* eTag that must be sent when doing a save or submit */
    this.casepyStatusWork = '';
    this.casedata = {}; /* Case data information */
    this.data = {};
    this.numAttachments = 0;
    this.attachmentcategories = [];
    this.assignmentID = '';
    this.actionID = '';
    this.content = {};
    this.pageInstructions = [];
    this.errorMsg = '';
    this.validationMsg = '';
    this.bShowConfirm = false;
    this.bShowNew = false;
    this.refreshOnChange = false;
    this.isDeclarativeTarget = false;
    const that = this;

    if (!window.i18n) {
      window.i18n = {
        t: function i18nT(msg) {
          if (!msg) return '';
          if (typeof msg !== 'string') return msg;
          let key = msg;
          if (key.indexOf('@L ') === 0) key = key.substring(3);
          key = key.replace(/^"|"$/g, '').trim();
          key = unescapeHTML(key);
          if (typeof that.langTokens !== 'object') return key;
          const value = that.langTokens[key];
          if (!value || value === '') {
            console.log(key);
            return key;
          }
          return value.trim();
        },
      };
    }
  }

  /* Clear the loading indicator */
  clearLoadingIndicator() {
    const el = this.getRenderRoot().querySelector('#case-data');
    if (el && el.querySelector('.loading') !== null) {
      render(null, el);
    }
  }

  /* Send an external event outside of the element */
  sendExternalEvent(msg) {
    this.dispatchEvent(
      new CustomEvent('message', {
        detail: { msg },
      }),
    );
  }
}

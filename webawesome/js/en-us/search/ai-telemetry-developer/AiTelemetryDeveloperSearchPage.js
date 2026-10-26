Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiTelemetryDeveloper')?.addEventListener('change', (event) => {
    facetRangeChange('AiTelemetryDeveloper', event.target.value);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_created')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'created', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'created', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_modified')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'modified', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'modified', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_archived')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'archived', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'archived', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_name')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'name', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'name', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_description')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'description', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'description', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_authorName')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'authorName', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'authorName', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_authorUrl')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'authorUrl', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_pageImageUri')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_pageId')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageId', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageId', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_displayPage')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'displayPage', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_classCanonicalName')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_objectTitle')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'objectTitle', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_editPage')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'editPage', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'editPage', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_userPage')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'userPage', 
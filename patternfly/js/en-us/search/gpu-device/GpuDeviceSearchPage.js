Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeGpuDevice')?.addEventListener('change', (event) => {
    facetRangeChange('GpuDevice', event.target.value);
  });

  document.querySelector('#pageSelectSortGpuDevice_pk')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'pk', true);
  });
  document.querySelector('#pageStatsGpuDevice_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'pk', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_created')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'created', true);
  });
  document.querySelector('#pageStatsGpuDevice_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'created', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_modified')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'modified', true);
  });
  document.querySelector('#pageStatsGpuDevice_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'modified', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_archived')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'archived', true);
  });
  document.querySelector('#pageStatsGpuDevice_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'archived', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_hubId')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_hubId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'hubId', true);
  });
  document.querySelector('#pageStatsGpuDevice_hubId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'hubId', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_clusterName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_clusterName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'clusterName', true);
  });
  document.querySelector('#pageStatsGpuDevice_clusterName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'clusterName', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_nodeName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'nodeName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_nodeName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'nodeName', true);
  });
  document.querySelector('#pageStatsGpuDevice_nodeName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'nodeName', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'gpuDeviceNumber', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_gpuDeviceNumber')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'gpuDeviceNumber', true);
  });
  document.querySelector('#pageStatsGpuDevice_gpuDeviceNumber')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'gpuDeviceNumber', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_modelName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'modelName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_modelName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'modelName', true);
  });
  document.querySelector('#pageStatsGpuDevice_modelName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'modelName', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_description')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'description', true);
  });
  document.querySelector('#pageStatsGpuDevice_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'description', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_gpuDeviceUtilization')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'gpuDeviceUtilization', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_gpuDeviceUtilization')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'gpuDeviceUtilization', true);
  });
  document.querySelector('#pageStatsGpuDevice_gpuDeviceUtilization')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'gpuDeviceUtilization', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_id')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'id', true);
  });
  document.querySelector('#pageStatsGpuDevice_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'id', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_ngsildTenant')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsGpuDevice_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_ngsildPath')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsGpuDevice_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_ngsildContext')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsGpuDevice_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_ngsildData')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'ngsildData', true);
  });
  document.querySelector('#pageStatsGpuDevice_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_location')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'location', true);
  });
  document.querySelector('#pageStatsGpuDevice_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'location', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_classCanonicalName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsGpuDevice_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_classSimpleName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsGpuDevice_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsGpuDevice_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_sessionId')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'sessionId', true);
  });
  document.querySelector('#pageStatsGpuDevice_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_userKey')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'userKey', true);
  });
  document.querySelector('#pageStatsGpuDevice_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'userKey', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_saves')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'saves', true);
  });
  document.querySelector('#pageStatsGpuDevice_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'saves', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_objectTitle')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'objectTitle', true);
  });
  document.querySelector('#pageStatsGpuDevice_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_displayPage')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'displayPage', true);
  });
  document.querySelector('#pageStatsGpuDevice_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_editPage')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'editPage', true);
  });
  document.querySelector('#pageStatsGpuDevice_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'editPage', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_userPage')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'userPage', true);
  });
  document.querySelector('#pageStatsGpuDevice_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'userPage', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_download')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'download', true);
  });
  document.querySelector('#pageStatsGpuDevice_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'download', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_objectSuggest')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsGpuDevice_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_objectText')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'objectText', true);
  });
  document.querySelector('#pageStatsGpuDevice_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'objectText', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_solrId')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'solrId', true);
  });
  document.querySelector('#pageStatsGpuDevice_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'solrId', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_hubResource')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'hubResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_hubResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'hubResource', true);
  });
  document.querySelector('#pageStatsGpuDevice_hubResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'hubResource', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_clusterResource')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'clusterResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_clusterResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'clusterResource', true);
  });
  document.querySelector('#pageStatsGpuDevice_clusterResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'clusterResource', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_nodeResource')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'nodeResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_nodeResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'nodeResource', true);
  });
  document.querySelector('#pageStatsGpuDevice_nodeResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'nodeResource', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_gpuDeviceResource')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'gpuDeviceResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_gpuDeviceResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'gpuDeviceResource', true);
  });
  document.querySelector('#pageStatsGpuDevice_gpuDeviceResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'gpuDeviceResource', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_gpuDeviceDisplayName')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'gpuDeviceDisplayName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_gpuDeviceDisplayName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'gpuDeviceDisplayName', true);
  });
  document.querySelector('#pageStatsGpuDevice_gpuDeviceDisplayName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'gpuDeviceDisplayName', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_locationColors')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'locationColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_locationColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'locationColors', true);
  });
  document.querySelector('#pageStatsGpuDevice_locationColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'locationColors', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_locationTitles')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'locationTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_locationTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'locationTitles', true);
  });
  document.querySelector('#pageStatsGpuDevice_locationTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'locationTitles', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_locationLinks')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'locationLinks', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_locationLinks')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'locationLinks', true);
  });
  document.querySelector('#pageStatsGpuDevice_locationLinks')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'locationLinks', false);
  });

  document.querySelector('#pageSelectSortGpuDevice_entityShortId')?.addEventListener('change', (event) => {
    sort('GpuDevice', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGpuDevice_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('GpuDevice', 'entityShortId', true);
  });
  document.querySelector('#pageStatsGpuDevice_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('GpuDevice', 'entityShortId', false);
  });

  document.querySelector('#htmButton_patchGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#patchGpuDeviceDialog').open = true;
  });

  document.querySelector('#htmButton_postGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#postGpuDeviceDialog').open = true;
  });

  document.querySelector('#htmButton_deleteGpuDevice')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var gpuDeviceResource =  event.currentTarget.getAttribute('data-gpuDeviceResource');
      deleteGpuDevice(
          event.currentTarget
          , gpuDeviceResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#putimportGpuDeviceDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageGpuDevice')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageGpuDeviceDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterGpuDevice')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterGpuDevice(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqGpuDevice_created')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_created')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_created')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_archived')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_archived')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_archived')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_hubId')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_hubId')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_hubId')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_clusterName')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_clusterName')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_clusterName')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_nodeName')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_nodeName')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_nodeName')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_nodeName')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_nodeName')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_nodeName')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_gpuDeviceNumber')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_gpuDeviceNumber')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_modelName')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_modelName')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_modelName')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_modelName')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_modelName')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_modelName')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_description')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_description')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_description')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_gpuDeviceUtilization')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_gpuDeviceUtilization')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_gpuDeviceUtilization')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_gpuDeviceUtilization')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_gpuDeviceUtilization')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_gpuDeviceUtilization')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_id')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_id')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_id')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_ngsildData')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_location')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_location')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_location')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_displayPage')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_editPage')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_userPage')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_download')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_download')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_download')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#fqGpuDevice_gpuDeviceResource')?.addEventListener('change', (event) => {
            fqChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuDevice_gpuDeviceResource')?.addEventListener('click', (event) => {
            facetFieldChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuDevice_gpuDeviceResource')?.addEventListener('change', (event) => {
            facetPivotChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGpuDevice_gpuDeviceResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGpuDevice_gpuDeviceResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('GpuDevice', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGpuDevice_gpuDeviceResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('GpuDevice', event.currentTarget);
          });
});

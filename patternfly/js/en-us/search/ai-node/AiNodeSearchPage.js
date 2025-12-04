Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiNode')?.addEventListener('change', (event) => {
    facetRangeChange('AiNode', event.target.value);
  });

  document.querySelector('#pageSelectSortAiNode_pk')?.addEventListener('change', (event) => {
    sort('AiNode', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'pk', true);
  });
  document.querySelector('#pageStatsAiNode_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'pk', false);
  });

  document.querySelector('#pageSelectSortAiNode_created')?.addEventListener('change', (event) => {
    sort('AiNode', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'created', true);
  });
  document.querySelector('#pageStatsAiNode_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'created', false);
  });

  document.querySelector('#pageSelectSortAiNode_modified')?.addEventListener('change', (event) => {
    sort('AiNode', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'modified', true);
  });
  document.querySelector('#pageStatsAiNode_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'modified', false);
  });

  document.querySelector('#pageSelectSortAiNode_archived')?.addEventListener('change', (event) => {
    sort('AiNode', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'archived', true);
  });
  document.querySelector('#pageStatsAiNode_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'archived', false);
  });

  document.querySelector('#pageSelectSortAiNode_hubId')?.addEventListener('change', (event) => {
    sort('AiNode', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_hubId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'hubId', true);
  });
  document.querySelector('#pageStatsAiNode_hubId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'hubId', false);
  });

  document.querySelector('#pageSelectSortAiNode_clusterName')?.addEventListener('change', (event) => {
    sort('AiNode', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_clusterName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'clusterName', true);
  });
  document.querySelector('#pageStatsAiNode_clusterName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'clusterName', false);
  });

  document.querySelector('#pageSelectSortAiNode_nodeName')?.addEventListener('change', (event) => {
    sort('AiNode', 'nodeName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_nodeName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'nodeName', true);
  });
  document.querySelector('#pageStatsAiNode_nodeName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'nodeName', false);
  });

  document.querySelector('#pageSelectSortAiNode_description')?.addEventListener('change', (event) => {
    sort('AiNode', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'description', true);
  });
  document.querySelector('#pageStatsAiNode_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'description', false);
  });

  document.querySelector('#pageSelectSortAiNode_id')?.addEventListener('change', (event) => {
    sort('AiNode', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'id', true);
  });
  document.querySelector('#pageStatsAiNode_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'id', false);
  });

  document.querySelector('#pageSelectSortAiNode_gpuDevicesTotal')?.addEventListener('change', (event) => {
    sort('AiNode', 'gpuDevicesTotal', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_gpuDevicesTotal')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'gpuDevicesTotal', true);
  });
  document.querySelector('#pageStatsAiNode_gpuDevicesTotal')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'gpuDevicesTotal', false);
  });

  document.querySelector('#pageSelectSortAiNode_ngsildTenant')?.addEventListener('change', (event) => {
    sort('AiNode', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsAiNode_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortAiNode_ngsildPath')?.addEventListener('change', (event) => {
    sort('AiNode', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsAiNode_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortAiNode_ngsildContext')?.addEventListener('change', (event) => {
    sort('AiNode', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsAiNode_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortAiNode_ngsildData')?.addEventListener('change', (event) => {
    sort('AiNode', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'ngsildData', true);
  });
  document.querySelector('#pageStatsAiNode_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortAiNode_location')?.addEventListener('change', (event) => {
    sort('AiNode', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'location', true);
  });
  document.querySelector('#pageStatsAiNode_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'location', false);
  });

  document.querySelector('#pageSelectSortAiNode_classCanonicalName')?.addEventListener('change', (event) => {
    sort('AiNode', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsAiNode_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortAiNode_classSimpleName')?.addEventListener('change', (event) => {
    sort('AiNode', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsAiNode_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortAiNode_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('AiNode', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsAiNode_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortAiNode_sessionId')?.addEventListener('change', (event) => {
    sort('AiNode', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'sessionId', true);
  });
  document.querySelector('#pageStatsAiNode_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortAiNode_userKey')?.addEventListener('change', (event) => {
    sort('AiNode', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'userKey', true);
  });
  document.querySelector('#pageStatsAiNode_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'userKey', false);
  });

  document.querySelector('#pageSelectSortAiNode_saves')?.addEventListener('change', (event) => {
    sort('AiNode', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'saves', true);
  });
  document.querySelector('#pageStatsAiNode_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'saves', false);
  });

  document.querySelector('#pageSelectSortAiNode_objectTitle')?.addEventListener('change', (event) => {
    sort('AiNode', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'objectTitle', true);
  });
  document.querySelector('#pageStatsAiNode_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortAiNode_displayPage')?.addEventListener('change', (event) => {
    sort('AiNode', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'displayPage', true);
  });
  document.querySelector('#pageStatsAiNode_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortAiNode_editPage')?.addEventListener('change', (event) => {
    sort('AiNode', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'editPage', true);
  });
  document.querySelector('#pageStatsAiNode_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'editPage', false);
  });

  document.querySelector('#pageSelectSortAiNode_userPage')?.addEventListener('change', (event) => {
    sort('AiNode', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'userPage', true);
  });
  document.querySelector('#pageStatsAiNode_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'userPage', false);
  });

  document.querySelector('#pageSelectSortAiNode_download')?.addEventListener('change', (event) => {
    sort('AiNode', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'download', true);
  });
  document.querySelector('#pageStatsAiNode_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'download', false);
  });

  document.querySelector('#pageSelectSortAiNode_objectSuggest')?.addEventListener('change', (event) => {
    sort('AiNode', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsAiNode_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortAiNode_objectText')?.addEventListener('change', (event) => {
    sort('AiNode', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'objectText', true);
  });
  document.querySelector('#pageStatsAiNode_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'objectText', false);
  });

  document.querySelector('#pageSelectSortAiNode_solrId')?.addEventListener('change', (event) => {
    sort('AiNode', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'solrId', true);
  });
  document.querySelector('#pageStatsAiNode_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'solrId', false);
  });

  document.querySelector('#pageSelectSortAiNode_hubResource')?.addEventListener('change', (event) => {
    sort('AiNode', 'hubResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_hubResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'hubResource', true);
  });
  document.querySelector('#pageStatsAiNode_hubResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'hubResource', false);
  });

  document.querySelector('#pageSelectSortAiNode_clusterResource')?.addEventListener('change', (event) => {
    sort('AiNode', 'clusterResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_clusterResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'clusterResource', true);
  });
  document.querySelector('#pageStatsAiNode_clusterResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'clusterResource', false);
  });

  document.querySelector('#pageSelectSortAiNode_nodeResource')?.addEventListener('change', (event) => {
    sort('AiNode', 'nodeResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_nodeResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'nodeResource', true);
  });
  document.querySelector('#pageStatsAiNode_nodeResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'nodeResource', false);
  });

  document.querySelector('#pageSelectSortAiNode_nodeDisplayName')?.addEventListener('change', (event) => {
    sort('AiNode', 'nodeDisplayName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_nodeDisplayName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'nodeDisplayName', true);
  });
  document.querySelector('#pageStatsAiNode_nodeDisplayName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'nodeDisplayName', false);
  });

  document.querySelector('#pageSelectSortAiNode_locationColors')?.addEventListener('change', (event) => {
    sort('AiNode', 'locationColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_locationColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'locationColors', true);
  });
  document.querySelector('#pageStatsAiNode_locationColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'locationColors', false);
  });

  document.querySelector('#pageSelectSortAiNode_locationTitles')?.addEventListener('change', (event) => {
    sort('AiNode', 'locationTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_locationTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'locationTitles', true);
  });
  document.querySelector('#pageStatsAiNode_locationTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'locationTitles', false);
  });

  document.querySelector('#pageSelectSortAiNode_locationLinks')?.addEventListener('change', (event) => {
    sort('AiNode', 'locationLinks', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_locationLinks')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'locationLinks', true);
  });
  document.querySelector('#pageStatsAiNode_locationLinks')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'locationLinks', false);
  });

  document.querySelector('#pageSelectSortAiNode_entityShortId')?.addEventListener('change', (event) => {
    sort('AiNode', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiNode_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiNode', 'entityShortId', true);
  });
  document.querySelector('#pageStatsAiNode_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiNode', 'entityShortId', false);
  });

  document.querySelector('#htmButton_patchAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#patchAiNodeDialog').open = true;
  });

  document.querySelector('#htmButton_postAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#postAiNodeDialog').open = true;
  });

  document.querySelector('#htmButton_deleteAiNode')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var nodeResource =  event.currentTarget.getAttribute('data-nodeResource');
      deleteAiNode(
          event.currentTarget
          , nodeResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#putimportAiNodeDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageAiNode')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageAiNodeDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterAiNode')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterAiNode(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqAiNode_created')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_created')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_created')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_archived')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_archived')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_archived')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_hubId')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_hubId')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_hubId')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_clusterName')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_clusterName')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_clusterName')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_nodeName')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_nodeName')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_nodeName')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_nodeName')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_nodeName')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_nodeName')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_id')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_id')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_id')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_gpuDevicesTotal')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_gpuDevicesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_ngsildData')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_location')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_location')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_location')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_displayPage')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_editPage')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_userPage')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_download')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_download')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_download')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
          document.querySelector('#fqAiNode_nodeResource')?.addEventListener('change', (event) => {
            fqChange('AiNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiNode_nodeResource')?.addEventListener('click', (event) => {
            facetFieldChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiNode_nodeResource')?.addEventListener('change', (event) => {
            facetPivotChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiNode_nodeResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiNode_nodeResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiNode_nodeResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiNode', event.currentTarget);
          });
});

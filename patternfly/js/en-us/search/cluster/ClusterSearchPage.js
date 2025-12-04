Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCluster')?.addEventListener('change', (event) => {
    facetRangeChange('Cluster', event.target.value);
  });

  document.querySelector('#pageSelectSortCluster_pk')?.addEventListener('change', (event) => {
    sort('Cluster', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'pk', true);
  });
  document.querySelector('#pageStatsCluster_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'pk', false);
  });

  document.querySelector('#pageSelectSortCluster_created')?.addEventListener('change', (event) => {
    sort('Cluster', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'created', true);
  });
  document.querySelector('#pageStatsCluster_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'created', false);
  });

  document.querySelector('#pageSelectSortCluster_modified')?.addEventListener('change', (event) => {
    sort('Cluster', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'modified', true);
  });
  document.querySelector('#pageStatsCluster_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'modified', false);
  });

  document.querySelector('#pageSelectSortCluster_archived')?.addEventListener('change', (event) => {
    sort('Cluster', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'archived', true);
  });
  document.querySelector('#pageStatsCluster_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'archived', false);
  });

  document.querySelector('#pageSelectSortCluster_hubId')?.addEventListener('change', (event) => {
    sort('Cluster', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_hubId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'hubId', true);
  });
  document.querySelector('#pageStatsCluster_hubId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'hubId', false);
  });

  document.querySelector('#pageSelectSortCluster_clusterName')?.addEventListener('change', (event) => {
    sort('Cluster', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_clusterName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'clusterName', true);
  });
  document.querySelector('#pageStatsCluster_clusterName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'clusterName', false);
  });

  document.querySelector('#pageSelectSortCluster_hubCluster')?.addEventListener('change', (event) => {
    sort('Cluster', 'hubCluster', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_hubCluster')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'hubCluster', true);
  });
  document.querySelector('#pageStatsCluster_hubCluster')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'hubCluster', false);
  });

  document.querySelector('#pageSelectSortCluster_clusterNameMetrics')?.addEventListener('change', (event) => {
    sort('Cluster', 'clusterNameMetrics', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_clusterNameMetrics')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'clusterNameMetrics', true);
  });
  document.querySelector('#pageStatsCluster_clusterNameMetrics')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'clusterNameMetrics', false);
  });

  document.querySelector('#pageSelectSortCluster_uniqueName')?.addEventListener('change', (event) => {
    sort('Cluster', 'uniqueName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_uniqueName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'uniqueName', true);
  });
  document.querySelector('#pageStatsCluster_uniqueName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'uniqueName', false);
  });

  document.querySelector('#pageSelectSortCluster_description')?.addEventListener('change', (event) => {
    sort('Cluster', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'description', true);
  });
  document.querySelector('#pageStatsCluster_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'description', false);
  });

  document.querySelector('#pageSelectSortCluster_location')?.addEventListener('change', (event) => {
    sort('Cluster', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'location', true);
  });
  document.querySelector('#pageStatsCluster_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'location', false);
  });

  document.querySelector('#pageSelectSortCluster_aiNodesTotal')?.addEventListener('change', (event) => {
    sort('Cluster', 'aiNodesTotal', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_aiNodesTotal')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'aiNodesTotal', true);
  });
  document.querySelector('#pageStatsCluster_aiNodesTotal')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'aiNodesTotal', false);
  });

  document.querySelector('#pageSelectSortCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
    sort('Cluster', 'gpuDevicesTotal', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_gpuDevicesTotal')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'gpuDevicesTotal', true);
  });
  document.querySelector('#pageStatsCluster_gpuDevicesTotal')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'gpuDevicesTotal', false);
  });

  document.querySelector('#pageSelectSortCluster_vmsTotal')?.addEventListener('change', (event) => {
    sort('Cluster', 'vmsTotal', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_vmsTotal')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'vmsTotal', true);
  });
  document.querySelector('#pageStatsCluster_vmsTotal')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'vmsTotal', false);
  });

  document.querySelector('#pageSelectSortCluster_grafanaUrl')?.addEventListener('change', (event) => {
    sort('Cluster', 'grafanaUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_grafanaUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'grafanaUrl', true);
  });
  document.querySelector('#pageStatsCluster_grafanaUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'grafanaUrl', false);
  });

  document.querySelector('#pageSelectSortCluster_cpuCoresTotal')?.addEventListener('change', (event) => {
    sort('Cluster', 'cpuCoresTotal', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_cpuCoresTotal')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'cpuCoresTotal', true);
  });
  document.querySelector('#pageStatsCluster_cpuCoresTotal')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'cpuCoresTotal', false);
  });

  document.querySelector('#pageSelectSortCluster_memoryBytesTotal')?.addEventListener('change', (event) => {
    sort('Cluster', 'memoryBytesTotal', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_memoryBytesTotal')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'memoryBytesTotal', true);
  });
  document.querySelector('#pageStatsCluster_memoryBytesTotal')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'memoryBytesTotal', false);
  });

  document.querySelector('#pageSelectSortCluster_id')?.addEventListener('change', (event) => {
    sort('Cluster', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'id', true);
  });
  document.querySelector('#pageStatsCluster_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'id', false);
  });

  document.querySelector('#pageSelectSortCluster_ngsildTenant')?.addEventListener('change', (event) => {
    sort('Cluster', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsCluster_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortCluster_ngsildPath')?.addEventListener('change', (event) => {
    sort('Cluster', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsCluster_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortCluster_ngsildContext')?.addEventListener('change', (event) => {
    sort('Cluster', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsCluster_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortCluster_ngsildData')?.addEventListener('change', (event) => {
    sort('Cluster', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'ngsildData', true);
  });
  document.querySelector('#pageStatsCluster_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortCluster_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Cluster', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsCluster_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortCluster_classSimpleName')?.addEventListener('change', (event) => {
    sort('Cluster', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsCluster_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortCluster_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Cluster', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsCluster_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortCluster_sessionId')?.addEventListener('change', (event) => {
    sort('Cluster', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'sessionId', true);
  });
  document.querySelector('#pageStatsCluster_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortCluster_userKey')?.addEventListener('change', (event) => {
    sort('Cluster', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'userKey', true);
  });
  document.querySelector('#pageStatsCluster_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'userKey', false);
  });

  document.querySelector('#pageSelectSortCluster_saves')?.addEventListener('change', (event) => {
    sort('Cluster', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'saves', true);
  });
  document.querySelector('#pageStatsCluster_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'saves', false);
  });

  document.querySelector('#pageSelectSortCluster_objectTitle')?.addEventListener('change', (event) => {
    sort('Cluster', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'objectTitle', true);
  });
  document.querySelector('#pageStatsCluster_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortCluster_displayPage')?.addEventListener('change', (event) => {
    sort('Cluster', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'displayPage', true);
  });
  document.querySelector('#pageStatsCluster_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortCluster_editPage')?.addEventListener('change', (event) => {
    sort('Cluster', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'editPage', true);
  });
  document.querySelector('#pageStatsCluster_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'editPage', false);
  });

  document.querySelector('#pageSelectSortCluster_userPage')?.addEventListener('change', (event) => {
    sort('Cluster', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'userPage', true);
  });
  document.querySelector('#pageStatsCluster_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'userPage', false);
  });

  document.querySelector('#pageSelectSortCluster_download')?.addEventListener('change', (event) => {
    sort('Cluster', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'download', true);
  });
  document.querySelector('#pageStatsCluster_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'download', false);
  });

  document.querySelector('#pageSelectSortCluster_objectSuggest')?.addEventListener('change', (event) => {
    sort('Cluster', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsCluster_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortCluster_objectText')?.addEventListener('change', (event) => {
    sort('Cluster', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'objectText', true);
  });
  document.querySelector('#pageStatsCluster_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'objectText', false);
  });

  document.querySelector('#pageSelectSortCluster_solrId')?.addEventListener('change', (event) => {
    sort('Cluster', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'solrId', true);
  });
  document.querySelector('#pageStatsCluster_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'solrId', false);
  });

  document.querySelector('#pageSelectSortCluster_hubResource')?.addEventListener('change', (event) => {
    sort('Cluster', 'hubResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_hubResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'hubResource', true);
  });
  document.querySelector('#pageStatsCluster_hubResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'hubResource', false);
  });

  document.querySelector('#pageSelectSortCluster_clusterResource')?.addEventListener('change', (event) => {
    sort('Cluster', 'clusterResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_clusterResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'clusterResource', true);
  });
  document.querySelector('#pageStatsCluster_clusterResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'clusterResource', false);
  });

  document.querySelector('#pageSelectSortCluster_locationColors')?.addEventListener('change', (event) => {
    sort('Cluster', 'locationColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_locationColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'locationColors', true);
  });
  document.querySelector('#pageStatsCluster_locationColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'locationColors', false);
  });

  document.querySelector('#pageSelectSortCluster_locationTitles')?.addEventListener('change', (event) => {
    sort('Cluster', 'locationTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_locationTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'locationTitles', true);
  });
  document.querySelector('#pageStatsCluster_locationTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'locationTitles', false);
  });

  document.querySelector('#pageSelectSortCluster_locationLinks')?.addEventListener('change', (event) => {
    sort('Cluster', 'locationLinks', event.currentTarget.value);
  });

  document.querySelector('#pageStatsCluster_locationLinks')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Cluster', 'locationLinks', true);
  });
  document.querySelector('#pageStatsCluster_locationLinks')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Cluster', 'locationLinks', false);
  });

  document.querySelector('#htmButton_patchCluster')?.addEventListener('click', (event) => {
    document.querySelector('#patchClusterDialog').open = true;
  });

  document.querySelector('#htmButton_postCluster')?.addEventListener('click', (event) => {
    document.querySelector('#postClusterDialog').open = true;
  });

  document.querySelector('#htmButton_deleteCluster')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var clusterResource =  event.currentTarget.getAttribute('data-clusterResource');
      deleteCluster(
          event.currentTarget
          , clusterResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCluster')?.addEventListener('click', (event) => {
    document.querySelector('#putimportClusterDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCluster')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageClusterDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCluster')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCluster(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCluster_created')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_created')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_created')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_archived')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_hubId')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_hubId')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_hubId')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_clusterName')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_clusterName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_clusterName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_hubCluster')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_hubCluster')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_hubCluster')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_hubCluster')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_hubCluster')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_hubCluster')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_location')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_location')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_location')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_aiNodesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_aiNodesTotal')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_gpuDevicesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_gpuDevicesTotal')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_vmsTotal')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_vmsTotal')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_vmsTotal')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_vmsTotal')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_vmsTotal')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_vmsTotal')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_cpuCoresTotal')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_cpuCoresTotal')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_cpuCoresTotal')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_cpuCoresTotal')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_cpuCoresTotal')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_cpuCoresTotal')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_memoryBytesTotal')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_memoryBytesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_memoryBytesTotal')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_memoryBytesTotal')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_memoryBytesTotal')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_memoryBytesTotal')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_id')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_id')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_id')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_ngsildData')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_displayPage')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_editPage')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_userPage')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_download')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_download')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_download')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
          document.querySelector('#fqCluster_clusterResource')?.addEventListener('change', (event) => {
            fqChange('Cluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetCluster_clusterResource')?.addEventListener('click', (event) => {
            facetFieldChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCluster_clusterResource')?.addEventListener('change', (event) => {
            facetPivotChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapCluster_clusterResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartCluster_clusterResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('Cluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndCluster_clusterResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('Cluster', event.currentTarget);
          });
});

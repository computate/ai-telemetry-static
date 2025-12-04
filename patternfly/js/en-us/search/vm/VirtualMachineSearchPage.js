Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeVirtualMachine')?.addEventListener('change', (event) => {
    facetRangeChange('VirtualMachine', event.target.value);
  });

  document.querySelector('#pageSelectSortVirtualMachine_pk')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'pk', true);
  });
  document.querySelector('#pageStatsVirtualMachine_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'pk', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_created')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'created', true);
  });
  document.querySelector('#pageStatsVirtualMachine_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'created', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_modified')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'modified', true);
  });
  document.querySelector('#pageStatsVirtualMachine_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'modified', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_archived')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'archived', true);
  });
  document.querySelector('#pageStatsVirtualMachine_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'archived', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_hubId')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_hubId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'hubId', true);
  });
  document.querySelector('#pageStatsVirtualMachine_hubId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'hubId', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_clusterName')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'clusterName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_clusterName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'clusterName', true);
  });
  document.querySelector('#pageStatsVirtualMachine_clusterName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'clusterName', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_clusterResource')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'clusterResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_clusterResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'clusterResource', true);
  });
  document.querySelector('#pageStatsVirtualMachine_clusterResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'clusterResource', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_vmProject')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'vmProject', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_vmProject')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'vmProject', true);
  });
  document.querySelector('#pageStatsVirtualMachine_vmProject')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'vmProject', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_description')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'description', true);
  });
  document.querySelector('#pageStatsVirtualMachine_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'description', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_vmName')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'vmName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_vmName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'vmName', true);
  });
  document.querySelector('#pageStatsVirtualMachine_vmName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'vmName', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_os')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'os', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_os')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'os', true);
  });
  document.querySelector('#pageStatsVirtualMachine_os')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'os', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_id')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'id', true);
  });
  document.querySelector('#pageStatsVirtualMachine_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'id', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_ngsildTenant')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsVirtualMachine_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_ngsildPath')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsVirtualMachine_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_ngsildContext')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsVirtualMachine_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_ngsildData')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'ngsildData', true);
  });
  document.querySelector('#pageStatsVirtualMachine_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_location')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'location', true);
  });
  document.querySelector('#pageStatsVirtualMachine_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'location', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_classCanonicalName')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsVirtualMachine_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_classSimpleName')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsVirtualMachine_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsVirtualMachine_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_sessionId')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'sessionId', true);
  });
  document.querySelector('#pageStatsVirtualMachine_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_userKey')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'userKey', true);
  });
  document.querySelector('#pageStatsVirtualMachine_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'userKey', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_saves')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'saves', true);
  });
  document.querySelector('#pageStatsVirtualMachine_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'saves', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_objectTitle')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'objectTitle', true);
  });
  document.querySelector('#pageStatsVirtualMachine_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_displayPage')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'displayPage', true);
  });
  document.querySelector('#pageStatsVirtualMachine_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_editPage')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'editPage', true);
  });
  document.querySelector('#pageStatsVirtualMachine_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'editPage', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_userPage')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'userPage', true);
  });
  document.querySelector('#pageStatsVirtualMachine_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'userPage', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_download')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'download', true);
  });
  document.querySelector('#pageStatsVirtualMachine_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'download', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_objectSuggest')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsVirtualMachine_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_objectText')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'objectText', true);
  });
  document.querySelector('#pageStatsVirtualMachine_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'objectText', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_solrId')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'solrId', true);
  });
  document.querySelector('#pageStatsVirtualMachine_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'solrId', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_hubResource')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'hubResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_hubResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'hubResource', true);
  });
  document.querySelector('#pageStatsVirtualMachine_hubResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'hubResource', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_vmResource')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'vmResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_vmResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'vmResource', true);
  });
  document.querySelector('#pageStatsVirtualMachine_vmResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'vmResource', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_vmDisplayName')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'vmDisplayName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_vmDisplayName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'vmDisplayName', true);
  });
  document.querySelector('#pageStatsVirtualMachine_vmDisplayName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'vmDisplayName', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_locationColors')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'locationColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_locationColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'locationColors', true);
  });
  document.querySelector('#pageStatsVirtualMachine_locationColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'locationColors', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_locationTitles')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'locationTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_locationTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'locationTitles', true);
  });
  document.querySelector('#pageStatsVirtualMachine_locationTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'locationTitles', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_locationLinks')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'locationLinks', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_locationLinks')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'locationLinks', true);
  });
  document.querySelector('#pageStatsVirtualMachine_locationLinks')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'locationLinks', false);
  });

  document.querySelector('#pageSelectSortVirtualMachine_entityShortId')?.addEventListener('change', (event) => {
    sort('VirtualMachine', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsVirtualMachine_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('VirtualMachine', 'entityShortId', true);
  });
  document.querySelector('#pageStatsVirtualMachine_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('VirtualMachine', 'entityShortId', false);
  });

  document.querySelector('#htmButton_patchVirtualMachine')?.addEventListener('click', (event) => {
    document.querySelector('#patchVirtualMachineDialog').open = true;
  });

  document.querySelector('#htmButton_postVirtualMachine')?.addEventListener('click', (event) => {
    document.querySelector('#postVirtualMachineDialog').open = true;
  });

  document.querySelector('#htmButton_deleteVirtualMachine')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var vmResource =  event.currentTarget.getAttribute('data-vmResource');
      deleteVirtualMachine(
          event.currentTarget
          , vmResource
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportVirtualMachine')?.addEventListener('click', (event) => {
    document.querySelector('#putimportVirtualMachineDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageVirtualMachine')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageVirtualMachineDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterVirtualMachine')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterVirtualMachine(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqVirtualMachine_created')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_created')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_created')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_archived')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_archived')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_archived')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_hubId')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_hubId')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_hubId')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_clusterName')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_clusterName')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_clusterName')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_clusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_clusterName')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_clusterName')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_vmProject')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_vmProject')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_vmProject')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_vmProject')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_vmProject')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_vmProject')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_vmName')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_vmName')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_vmName')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_vmName')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_vmName')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_vmName')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_os')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_os')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_os')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_os')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_os')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_os')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_id')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_id')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_id')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_ngsildData')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_location')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_location')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_location')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_displayPage')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_editPage')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_userPage')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_download')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_download')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_download')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#fqVirtualMachine_vmResource')?.addEventListener('change', (event) => {
            fqChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#buttonFacetVirtualMachine_vmResource')?.addEventListener('click', (event) => {
            facetFieldChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotVirtualMachine_vmResource')?.addEventListener('change', (event) => {
            facetPivotChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapVirtualMachine_vmResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartVirtualMachine_vmResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('VirtualMachine', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndVirtualMachine_vmResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('VirtualMachine', event.currentTarget);
          });
});

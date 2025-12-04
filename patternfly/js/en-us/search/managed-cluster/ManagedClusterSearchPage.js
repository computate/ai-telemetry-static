Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeManagedCluster')?.addEventListener('change', (event) => {
    facetRangeChange('ManagedCluster', event.target.value);
  });

  document.querySelector('#pageSelectSortManagedCluster_pk')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'pk', true);
  });
  document.querySelector('#pageStatsManagedCluster_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'pk', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_created')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'created', true);
  });
  document.querySelector('#pageStatsManagedCluster_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'created', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_modified')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'modified', true);
  });
  document.querySelector('#pageStatsManagedCluster_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'modified', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_archived')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'archived', true);
  });
  document.querySelector('#pageStatsManagedCluster_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'archived', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_id')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'id', true);
  });
  document.querySelector('#pageStatsManagedCluster_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'id', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_state')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'state', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_state')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'state', true);
  });
  document.querySelector('#pageStatsManagedCluster_state')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'state', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_apiUrl')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'apiUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_apiUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'apiUrl', true);
  });
  document.querySelector('#pageStatsManagedCluster_apiUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'apiUrl', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_consoleUrl')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'consoleUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_consoleUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'consoleUrl', true);
  });
  document.querySelector('#pageStatsManagedCluster_consoleUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'consoleUrl', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_classCanonicalName')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsManagedCluster_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_classSimpleName')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsManagedCluster_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsManagedCluster_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_sessionId')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'sessionId', true);
  });
  document.querySelector('#pageStatsManagedCluster_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_userKey')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'userKey', true);
  });
  document.querySelector('#pageStatsManagedCluster_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'userKey', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_saves')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'saves', true);
  });
  document.querySelector('#pageStatsManagedCluster_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'saves', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_objectTitle')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'objectTitle', true);
  });
  document.querySelector('#pageStatsManagedCluster_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_displayPage')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'displayPage', true);
  });
  document.querySelector('#pageStatsManagedCluster_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_editPage')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'editPage', true);
  });
  document.querySelector('#pageStatsManagedCluster_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'editPage', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_userPage')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'userPage', true);
  });
  document.querySelector('#pageStatsManagedCluster_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'userPage', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_download')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'download', true);
  });
  document.querySelector('#pageStatsManagedCluster_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'download', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_objectSuggest')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsManagedCluster_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_objectText')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'objectText', true);
  });
  document.querySelector('#pageStatsManagedCluster_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'objectText', false);
  });

  document.querySelector('#pageSelectSortManagedCluster_solrId')?.addEventListener('change', (event) => {
    sort('ManagedCluster', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsManagedCluster_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ManagedCluster', 'solrId', true);
  });
  document.querySelector('#pageStatsManagedCluster_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ManagedCluster', 'solrId', false);
  });

  document.querySelector('#htmButton_patchManagedCluster')?.addEventListener('click', (event) => {
    document.querySelector('#patchManagedClusterDialog').open = true;
  });

  document.querySelector('#htmButton_postManagedCluster')?.addEventListener('click', (event) => {
    document.querySelector('#postManagedClusterDialog').open = true;
  });

  document.querySelector('#htmButton_deleteManagedCluster')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var id =  event.currentTarget.getAttribute('data-id');
      deleteManagedCluster(
          event.currentTarget
          , id
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportManagedCluster')?.addEventListener('click', (event) => {
    document.querySelector('#putimportManagedClusterDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageManagedCluster')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageManagedClusterDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterManagedCluster')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterManagedCluster(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqManagedCluster_created')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_created')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_created')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartManagedCluster_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndManagedCluster_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_archived')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_archived')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_archived')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartManagedCluster_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndManagedCluster_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_id')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_id')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_id')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartManagedCluster_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndManagedCluster_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_state')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_state')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_state')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_state')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartManagedCluster_state')?.addEventListener('change', (event) => {
            facetRangeStartChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndManagedCluster_state')?.addEventListener('change', (event) => {
            facetRangeEndChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_apiUrl')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_apiUrl')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_apiUrl')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_apiUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartManagedCluster_apiUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndManagedCluster_apiUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_consoleUrl')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_consoleUrl')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_consoleUrl')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_consoleUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartManagedCluster_consoleUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndManagedCluster_consoleUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_displayPage')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartManagedCluster_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndManagedCluster_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_editPage')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartManagedCluster_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndManagedCluster_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_userPage')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartManagedCluster_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndManagedCluster_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#fqManagedCluster_download')?.addEventListener('change', (event) => {
            fqChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#buttonFacetManagedCluster_download')?.addEventListener('click', (event) => {
            facetFieldChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotManagedCluster_download')?.addEventListener('change', (event) => {
            facetPivotChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapManagedCluster_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartManagedCluster_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('ManagedCluster', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndManagedCluster_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('ManagedCluster', event.currentTarget);
          });
});

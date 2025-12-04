Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeClusterOrder')?.addEventListener('change', (event) => {
    facetRangeChange('ClusterOrder', event.target.value);
  });

  document.querySelector('#pageSelectSortClusterOrder_pk')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'pk', true);
  });
  document.querySelector('#pageStatsClusterOrder_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'pk', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_created')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'created', true);
  });
  document.querySelector('#pageStatsClusterOrder_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'created', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_modified')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'modified', true);
  });
  document.querySelector('#pageStatsClusterOrder_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'modified', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_archived')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'archived', true);
  });
  document.querySelector('#pageStatsClusterOrder_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'archived', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_id')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'id', true);
  });
  document.querySelector('#pageStatsClusterOrder_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'id', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_templateId')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'templateId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_templateId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'templateId', true);
  });
  document.querySelector('#pageStatsClusterOrder_templateId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'templateId', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_state')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'state', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_state')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'state', true);
  });
  document.querySelector('#pageStatsClusterOrder_state')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'state', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_clusterId')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'clusterId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_clusterId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'clusterId', true);
  });
  document.querySelector('#pageStatsClusterOrder_clusterId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'clusterId', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_classCanonicalName')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsClusterOrder_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_classSimpleName')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsClusterOrder_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsClusterOrder_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_sessionId')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'sessionId', true);
  });
  document.querySelector('#pageStatsClusterOrder_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_userKey')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'userKey', true);
  });
  document.querySelector('#pageStatsClusterOrder_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'userKey', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_saves')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'saves', true);
  });
  document.querySelector('#pageStatsClusterOrder_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'saves', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_objectTitle')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'objectTitle', true);
  });
  document.querySelector('#pageStatsClusterOrder_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_displayPage')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'displayPage', true);
  });
  document.querySelector('#pageStatsClusterOrder_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_editPage')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'editPage', true);
  });
  document.querySelector('#pageStatsClusterOrder_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'editPage', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_userPage')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'userPage', true);
  });
  document.querySelector('#pageStatsClusterOrder_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'userPage', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_download')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'download', true);
  });
  document.querySelector('#pageStatsClusterOrder_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'download', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_objectSuggest')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsClusterOrder_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_objectText')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'objectText', true);
  });
  document.querySelector('#pageStatsClusterOrder_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'objectText', false);
  });

  document.querySelector('#pageSelectSortClusterOrder_solrId')?.addEventListener('change', (event) => {
    sort('ClusterOrder', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterOrder_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterOrder', 'solrId', true);
  });
  document.querySelector('#pageStatsClusterOrder_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterOrder', 'solrId', false);
  });

  document.querySelector('#htmButton_patchClusterOrder')?.addEventListener('click', (event) => {
    document.querySelector('#patchClusterOrderDialog').open = true;
  });

  document.querySelector('#htmButton_postClusterOrder')?.addEventListener('click', (event) => {
    document.querySelector('#postClusterOrderDialog').open = true;
  });

  document.querySelector('#htmButton_deleteClusterOrder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var id =  event.currentTarget.getAttribute('data-id');
      deleteClusterOrder(
          event.currentTarget
          , id
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportClusterOrder')?.addEventListener('click', (event) => {
    document.querySelector('#putimportClusterOrderDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageClusterOrder')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageClusterOrderDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterClusterOrder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterClusterOrder(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqClusterOrder_created')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_created')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_created')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterOrder_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterOrder_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterOrder_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_archived')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_archived')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_archived')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterOrder_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterOrder_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterOrder_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_id')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_id')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_id')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterOrder_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterOrder_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterOrder_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_state')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_state')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_state')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterOrder_state')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterOrder_state')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterOrder_state')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_clusterId')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_clusterId')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_clusterId')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterOrder_clusterId')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterOrder_clusterId')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterOrder_clusterId')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_displayPage')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterOrder_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterOrder_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterOrder_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_editPage')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterOrder_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterOrder_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterOrder_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_userPage')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterOrder_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterOrder_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterOrder_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#fqClusterOrder_download')?.addEventListener('change', (event) => {
            fqChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterOrder_download')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterOrder_download')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterOrder_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterOrder_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterOrder_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterOrder', event.currentTarget);
          });
});

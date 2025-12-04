Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeClusterRequest')?.addEventListener('change', (event) => {
    facetRangeChange('ClusterRequest', event.target.value);
  });

  document.querySelector('#pageSelectSortClusterRequest_pk')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'pk', true);
  });
  document.querySelector('#pageStatsClusterRequest_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'pk', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_created')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'created', true);
  });
  document.querySelector('#pageStatsClusterRequest_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'created', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_modified')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'modified', true);
  });
  document.querySelector('#pageStatsClusterRequest_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'modified', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_archived')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'archived', true);
  });
  document.querySelector('#pageStatsClusterRequest_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'archived', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_name')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'name', true);
  });
  document.querySelector('#pageStatsClusterRequest_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'name', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_clusterTemplateTitle')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'clusterTemplateTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_clusterTemplateTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'clusterTemplateTitle', true);
  });
  document.querySelector('#pageStatsClusterRequest_clusterTemplateTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'clusterTemplateTitle', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_userId')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'userId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_userId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'userId', true);
  });
  document.querySelector('#pageStatsClusterRequest_userId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'userId', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_classCanonicalName')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsClusterRequest_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_classSimpleName')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsClusterRequest_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsClusterRequest_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_sessionId')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'sessionId', true);
  });
  document.querySelector('#pageStatsClusterRequest_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_userKey')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'userKey', true);
  });
  document.querySelector('#pageStatsClusterRequest_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'userKey', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_saves')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'saves', true);
  });
  document.querySelector('#pageStatsClusterRequest_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'saves', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_objectTitle')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'objectTitle', true);
  });
  document.querySelector('#pageStatsClusterRequest_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_displayPage')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'displayPage', true);
  });
  document.querySelector('#pageStatsClusterRequest_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_editPage')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'editPage', true);
  });
  document.querySelector('#pageStatsClusterRequest_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'editPage', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_userPage')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'userPage', true);
  });
  document.querySelector('#pageStatsClusterRequest_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'userPage', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_download')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'download', true);
  });
  document.querySelector('#pageStatsClusterRequest_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'download', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_objectSuggest')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsClusterRequest_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_objectText')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'objectText', true);
  });
  document.querySelector('#pageStatsClusterRequest_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'objectText', false);
  });

  document.querySelector('#pageSelectSortClusterRequest_solrId')?.addEventListener('change', (event) => {
    sort('ClusterRequest', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterRequest_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterRequest', 'solrId', true);
  });
  document.querySelector('#pageStatsClusterRequest_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterRequest', 'solrId', false);
  });

  document.querySelector('#htmButton_patchClusterRequest')?.addEventListener('click', (event) => {
    document.querySelector('#patchClusterRequestDialog').open = true;
  });

  document.querySelector('#htmButton_postClusterRequest')?.addEventListener('click', (event) => {
    document.querySelector('#postClusterRequestDialog').open = true;
  });

  document.querySelector('#htmButton_deleteClusterRequest')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var name =  event.currentTarget.getAttribute('data-name');
      deleteClusterRequest(
          event.currentTarget
          , name
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportClusterRequest')?.addEventListener('click', (event) => {
    document.querySelector('#putimportClusterRequestDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageClusterRequest')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageClusterRequestDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterClusterRequest')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterClusterRequest(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqClusterRequest_created')?.addEventListener('change', (event) => {
            fqChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterRequest_created')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterRequest_created')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterRequest_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterRequest_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterRequest_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#fqClusterRequest_archived')?.addEventListener('change', (event) => {
            fqChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterRequest_archived')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterRequest_archived')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterRequest_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterRequest_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterRequest_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#fqClusterRequest_name')?.addEventListener('change', (event) => {
            fqChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterRequest_name')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterRequest_name')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterRequest_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterRequest_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterRequest_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#fqClusterRequest_displayPage')?.addEventListener('change', (event) => {
            fqChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterRequest_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterRequest_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterRequest_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterRequest_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterRequest_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#fqClusterRequest_editPage')?.addEventListener('change', (event) => {
            fqChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterRequest_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterRequest_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterRequest_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterRequest_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterRequest_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#fqClusterRequest_userPage')?.addEventListener('change', (event) => {
            fqChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterRequest_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterRequest_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterRequest_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterRequest_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterRequest_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#fqClusterRequest_download')?.addEventListener('change', (event) => {
            fqChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterRequest_download')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterRequest_download')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterRequest_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterRequest_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterRequest', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterRequest_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterRequest', event.currentTarget);
          });
});

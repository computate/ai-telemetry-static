Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeClusterTemplate')?.addEventListener('change', (event) => {
    facetRangeChange('ClusterTemplate', event.target.value);
  });

  document.querySelector('#pageSelectSortClusterTemplate_pk')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'pk', true);
  });
  document.querySelector('#pageStatsClusterTemplate_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'pk', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_created')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'created', true);
  });
  document.querySelector('#pageStatsClusterTemplate_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'created', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_modified')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'modified', true);
  });
  document.querySelector('#pageStatsClusterTemplate_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'modified', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_archived')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'archived', true);
  });
  document.querySelector('#pageStatsClusterTemplate_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'archived', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_id')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'id', true);
  });
  document.querySelector('#pageStatsClusterTemplate_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'id', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_title')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'title', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_title')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'title', true);
  });
  document.querySelector('#pageStatsClusterTemplate_title')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'title', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_description')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'description', true);
  });
  document.querySelector('#pageStatsClusterTemplate_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'description', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_parameters')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'parameters', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_parameters')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'parameters', true);
  });
  document.querySelector('#pageStatsClusterTemplate_parameters')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'parameters', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_classCanonicalName')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsClusterTemplate_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_classSimpleName')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsClusterTemplate_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsClusterTemplate_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_sessionId')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'sessionId', true);
  });
  document.querySelector('#pageStatsClusterTemplate_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_userKey')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'userKey', true);
  });
  document.querySelector('#pageStatsClusterTemplate_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'userKey', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_saves')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'saves', true);
  });
  document.querySelector('#pageStatsClusterTemplate_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'saves', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_objectTitle')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'objectTitle', true);
  });
  document.querySelector('#pageStatsClusterTemplate_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_displayPage')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'displayPage', true);
  });
  document.querySelector('#pageStatsClusterTemplate_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_editPage')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'editPage', true);
  });
  document.querySelector('#pageStatsClusterTemplate_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'editPage', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_userPage')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'userPage', true);
  });
  document.querySelector('#pageStatsClusterTemplate_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'userPage', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_download')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'download', true);
  });
  document.querySelector('#pageStatsClusterTemplate_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'download', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_objectSuggest')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsClusterTemplate_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_objectText')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'objectText', true);
  });
  document.querySelector('#pageStatsClusterTemplate_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'objectText', false);
  });

  document.querySelector('#pageSelectSortClusterTemplate_solrId')?.addEventListener('change', (event) => {
    sort('ClusterTemplate', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsClusterTemplate_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('ClusterTemplate', 'solrId', true);
  });
  document.querySelector('#pageStatsClusterTemplate_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('ClusterTemplate', 'solrId', false);
  });

  document.querySelector('#htmButton_patchClusterTemplate')?.addEventListener('click', (event) => {
    document.querySelector('#patchClusterTemplateDialog').open = true;
  });

  document.querySelector('#htmButton_postClusterTemplate')?.addEventListener('click', (event) => {
    document.querySelector('#postClusterTemplateDialog').open = true;
  });

  document.querySelector('#htmButton_deleteClusterTemplate')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var id =  event.currentTarget.getAttribute('data-id');
      deleteClusterTemplate(
          event.currentTarget
          , id
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportClusterTemplate')?.addEventListener('click', (event) => {
    document.querySelector('#putimportClusterTemplateDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageClusterTemplate')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageClusterTemplateDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterClusterTemplate')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterClusterTemplate(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqClusterTemplate_created')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_created')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_created')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterTemplate_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterTemplate_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_archived')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_archived')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_archived')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterTemplate_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterTemplate_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_id')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_id')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_id')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterTemplate_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterTemplate_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_title')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_title')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_title')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_title')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterTemplate_title')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterTemplate_title')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_description')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_description')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_description')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterTemplate_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterTemplate_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_parameters')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_parameters')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_parameters')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_parameters')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterTemplate_parameters')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterTemplate_parameters')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_displayPage')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterTemplate_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterTemplate_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_editPage')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterTemplate_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterTemplate_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_userPage')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterTemplate_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterTemplate_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#fqClusterTemplate_download')?.addEventListener('change', (event) => {
            fqChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#buttonFacetClusterTemplate_download')?.addEventListener('click', (event) => {
            facetFieldChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotClusterTemplate_download')?.addEventListener('change', (event) => {
            facetPivotChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapClusterTemplate_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartClusterTemplate_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('ClusterTemplate', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndClusterTemplate_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('ClusterTemplate', event.currentTarget);
          });
});

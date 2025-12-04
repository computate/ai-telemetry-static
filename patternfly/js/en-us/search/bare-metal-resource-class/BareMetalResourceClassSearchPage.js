Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeBareMetalResourceClass')?.addEventListener('change', (event) => {
    facetRangeChange('BareMetalResourceClass', event.target.value);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_pk')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'pk', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'pk', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_created')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'created', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'created', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_modified')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'modified', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'modified', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_archived')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'archived', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'archived', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_name')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'name', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'name', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_count')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'count', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_count')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'count', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_count')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'count', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_classCanonicalName')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_classSimpleName')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_sessionId')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'sessionId', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_userKey')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'userKey', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'userKey', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_saves')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'saves', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'saves', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_objectTitle')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'objectTitle', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_displayPage')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'displayPage', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_editPage')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'editPage', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'editPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_userPage')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'userPage', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'userPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_download')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'download', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'download', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_objectSuggest')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_objectText')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'objectText', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'objectText', false);
  });

  document.querySelector('#pageSelectSortBareMetalResourceClass_solrId')?.addEventListener('change', (event) => {
    sort('BareMetalResourceClass', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalResourceClass_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalResourceClass', 'solrId', true);
  });
  document.querySelector('#pageStatsBareMetalResourceClass_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalResourceClass', 'solrId', false);
  });

  document.querySelector('#htmButton_patchBareMetalResourceClass')?.addEventListener('click', (event) => {
    document.querySelector('#patchBareMetalResourceClassDialog').open = true;
  });

  document.querySelector('#htmButton_postBareMetalResourceClass')?.addEventListener('click', (event) => {
    document.querySelector('#postBareMetalResourceClassDialog').open = true;
  });

  document.querySelector('#htmButton_deleteBareMetalResourceClass')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var name =  event.currentTarget.getAttribute('data-name');
      deleteBareMetalResourceClass(
          event.currentTarget
          , name
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportBareMetalResourceClass')?.addEventListener('click', (event) => {
    document.querySelector('#putimportBareMetalResourceClassDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageBareMetalResourceClass')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageBareMetalResourceClassDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterBareMetalResourceClass')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterBareMetalResourceClass(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqBareMetalResourceClass_created')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_created')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_created')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalResourceClass_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalResourceClass_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalResourceClass_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#fqBareMetalResourceClass_archived')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_archived')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_archived')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalResourceClass_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalResourceClass_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalResourceClass_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#fqBareMetalResourceClass_name')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_name')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_name')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalResourceClass_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalResourceClass_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalResourceClass_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#fqBareMetalResourceClass_count')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_count')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_count')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalResourceClass_count')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalResourceClass_count')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalResourceClass_count')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#fqBareMetalResourceClass_displayPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalResourceClass_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalResourceClass_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalResourceClass_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#fqBareMetalResourceClass_editPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalResourceClass_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalResourceClass_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalResourceClass_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#fqBareMetalResourceClass_userPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalResourceClass_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalResourceClass_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalResourceClass_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#fqBareMetalResourceClass_download')?.addEventListener('change', (event) => {
            fqChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalResourceClass_download')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalResourceClass_download')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalResourceClass_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalResourceClass_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalResourceClass', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalResourceClass_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalResourceClass', event.currentTarget);
          });
});

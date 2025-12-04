Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeHub')?.addEventListener('change', (event) => {
    facetRangeChange('Hub', event.target.value);
  });

  document.querySelector('#pageSelectSortHub_pk')?.addEventListener('change', (event) => {
    sort('Hub', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'pk', true);
  });
  document.querySelector('#pageStatsHub_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'pk', false);
  });

  document.querySelector('#pageSelectSortHub_created')?.addEventListener('change', (event) => {
    sort('Hub', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'created', true);
  });
  document.querySelector('#pageStatsHub_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'created', false);
  });

  document.querySelector('#pageSelectSortHub_modified')?.addEventListener('change', (event) => {
    sort('Hub', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'modified', true);
  });
  document.querySelector('#pageStatsHub_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'modified', false);
  });

  document.querySelector('#pageSelectSortHub_archived')?.addEventListener('change', (event) => {
    sort('Hub', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'archived', true);
  });
  document.querySelector('#pageStatsHub_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'archived', false);
  });

  document.querySelector('#pageSelectSortHub_hubName')?.addEventListener('change', (event) => {
    sort('Hub', 'hubName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_hubName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'hubName', true);
  });
  document.querySelector('#pageStatsHub_hubName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'hubName', false);
  });

  document.querySelector('#pageSelectSortHub_hubId')?.addEventListener('change', (event) => {
    sort('Hub', 'hubId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_hubId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'hubId', true);
  });
  document.querySelector('#pageStatsHub_hubId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'hubId', false);
  });

  document.querySelector('#pageSelectSortHub_description')?.addEventListener('change', (event) => {
    sort('Hub', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'description', true);
  });
  document.querySelector('#pageStatsHub_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'description', false);
  });

  document.querySelector('#pageSelectSortHub_pageId')?.addEventListener('change', (event) => {
    sort('Hub', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'pageId', true);
  });
  document.querySelector('#pageStatsHub_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'pageId', false);
  });

  document.querySelector('#pageSelectSortHub_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Hub', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsHub_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortHub_classSimpleName')?.addEventListener('change', (event) => {
    sort('Hub', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsHub_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortHub_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Hub', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsHub_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortHub_sessionId')?.addEventListener('change', (event) => {
    sort('Hub', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'sessionId', true);
  });
  document.querySelector('#pageStatsHub_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortHub_userKey')?.addEventListener('change', (event) => {
    sort('Hub', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'userKey', true);
  });
  document.querySelector('#pageStatsHub_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'userKey', false);
  });

  document.querySelector('#pageSelectSortHub_saves')?.addEventListener('change', (event) => {
    sort('Hub', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'saves', true);
  });
  document.querySelector('#pageStatsHub_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'saves', false);
  });

  document.querySelector('#pageSelectSortHub_objectTitle')?.addEventListener('change', (event) => {
    sort('Hub', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'objectTitle', true);
  });
  document.querySelector('#pageStatsHub_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortHub_displayPage')?.addEventListener('change', (event) => {
    sort('Hub', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'displayPage', true);
  });
  document.querySelector('#pageStatsHub_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortHub_editPage')?.addEventListener('change', (event) => {
    sort('Hub', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'editPage', true);
  });
  document.querySelector('#pageStatsHub_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'editPage', false);
  });

  document.querySelector('#pageSelectSortHub_userPage')?.addEventListener('change', (event) => {
    sort('Hub', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'userPage', true);
  });
  document.querySelector('#pageStatsHub_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'userPage', false);
  });

  document.querySelector('#pageSelectSortHub_download')?.addEventListener('change', (event) => {
    sort('Hub', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'download', true);
  });
  document.querySelector('#pageStatsHub_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'download', false);
  });

  document.querySelector('#pageSelectSortHub_objectSuggest')?.addEventListener('change', (event) => {
    sort('Hub', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsHub_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortHub_objectText')?.addEventListener('change', (event) => {
    sort('Hub', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'objectText', true);
  });
  document.querySelector('#pageStatsHub_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'objectText', false);
  });

  document.querySelector('#pageSelectSortHub_solrId')?.addEventListener('change', (event) => {
    sort('Hub', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'solrId', true);
  });
  document.querySelector('#pageStatsHub_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'solrId', false);
  });

  document.querySelector('#pageSelectSortHub_hubResource')?.addEventListener('change', (event) => {
    sort('Hub', 'hubResource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_hubResource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'hubResource', true);
  });
  document.querySelector('#pageStatsHub_hubResource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'hubResource', false);
  });

  document.querySelector('#pageSelectSortHub_localClusterName')?.addEventListener('change', (event) => {
    sort('Hub', 'localClusterName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsHub_localClusterName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Hub', 'localClusterName', true);
  });
  document.querySelector('#pageStatsHub_localClusterName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Hub', 'localClusterName', false);
  });

  document.querySelector('#htmButton_patchHub')?.addEventListener('click', (event) => {
    document.querySelector('#patchHubDialog').open = true;
  });

  document.querySelector('#htmButton_postHub')?.addEventListener('click', (event) => {
    document.querySelector('#postHubDialog').open = true;
  });

  document.querySelector('#htmButton_deleteHub')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var hubId =  event.currentTarget.getAttribute('data-hubId');
      deleteHub(
          event.currentTarget
          , hubId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportHub')?.addEventListener('click', (event) => {
    document.querySelector('#putimportHubDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageHub')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageHubDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterHub')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterHub(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqHub_created')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_created')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_created')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_archived')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_hubName')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_hubName')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_hubName')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_hubName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_hubName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_hubName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_hubId')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_hubId')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_hubId')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_hubId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_hubId')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_hubId')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_description')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_description')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_description')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_pageId')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_displayPage')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_editPage')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_userPage')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_download')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_download')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_download')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_hubResource')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_hubResource')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_hubResource')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_hubResource')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_hubResource')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_hubResource')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_localClusterName')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_localClusterName')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_localClusterName')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapHub_localClusterName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartHub_localClusterName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndHub_localClusterName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Hub', event.currentTarget);
          });
});

Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeHub')?.addEventListener('change', (event) => {
    facetRangeChange('Hub', event.target.value);
  });

  document.querySelector('#pageFacetSortHub_pk')?.addEventListener('change', (event) => {
    sort('Hub', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_created')?.addEventListener('change', (event) => {
    sort('Hub', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_modified')?.addEventListener('change', (event) => {
    sort('Hub', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_archived')?.addEventListener('change', (event) => {
    sort('Hub', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_tenantName')?.addEventListener('change', (event) => {
    sort('Hub', 'tenantName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_tenantId')?.addEventListener('change', (event) => {
    sort('Hub', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_description')?.addEventListener('change', (event) => {
    sort('Hub', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_pageId')?.addEventListener('change', (event) => {
    sort('Hub', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Hub', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_classSimpleName')?.addEventListener('change', (event) => {
    sort('Hub', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Hub', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_sessionId')?.addEventListener('change', (event) => {
    sort('Hub', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_userKey')?.addEventListener('change', (event) => {
    sort('Hub', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_saves')?.addEventListener('change', (event) => {
    sort('Hub', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_objectTitle')?.addEventListener('change', (event) => {
    sort('Hub', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_displayPage')?.addEventListener('change', (event) => {
    sort('Hub', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_editPage')?.addEventListener('change', (event) => {
    sort('Hub', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_userPage')?.addEventListener('change', (event) => {
    sort('Hub', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_download')?.addEventListener('change', (event) => {
    sort('Hub', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_objectSuggest')?.addEventListener('change', (event) => {
    sort('Hub', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_objectText')?.addEventListener('change', (event) => {
    sort('Hub', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortHub_solrId')?.addEventListener('change', (event) => {
    sort('Hub', 'solrId', event.currentTarget.value);
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
      var tenantId =  event.currentTarget.getAttribute('data-tenantId');
      deleteHub(
          event.currentTarget
          , tenantId
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
          document.querySelector('#fqHub_archived')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_tenantName')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_tenantName')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_tenantName')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
          });
          document.querySelector('#fqHub_tenantId')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_tenantId')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_tenantId')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
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
          document.querySelector('#fqHub_pageId')?.addEventListener('change', (event) => {
            fqChange('Hub', event.currentTarget);
          });
          document.querySelector('#buttonFacetHub_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('Hub', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotHub_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('Hub', event.currentTarget);
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
});

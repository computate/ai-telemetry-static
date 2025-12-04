Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeGpuSlice')?.addEventListener('change', (event) => {
    facetRangeChange('GpuSlice', event.target.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_pk')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_created')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_modified')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_archived')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_sliceName')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'sliceName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_description')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_id')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_ngsildTenant')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_ngsildPath')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_ngsildContext')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_ngsildData')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_location')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_classCanonicalName')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_classSimpleName')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_sessionId')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_userKey')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_saves')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_objectTitle')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_displayPage')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_editPage')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_userPage')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_download')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_objectSuggest')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_objectText')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_solrId')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_locationColors')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'locationColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_locationTitles')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'locationTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_locationLinks')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'locationLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortGpuSlice_entityShortId')?.addEventListener('change', (event) => {
    sort('GpuSlice', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchGpuSlice')?.addEventListener('click', (event) => {
    document.querySelector('#patchGpuSliceDialog').open = true;
  });

  document.querySelector('#htmButton_postGpuSlice')?.addEventListener('click', (event) => {
    document.querySelector('#postGpuSliceDialog').open = true;
  });

  document.querySelector('#htmButton_deleteGpuSlice')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var sliceName =  event.currentTarget.getAttribute('data-sliceName');
      deleteGpuSlice(
          event.currentTarget
          , sliceName
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportGpuSlice')?.addEventListener('click', (event) => {
    document.querySelector('#putimportGpuSliceDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageGpuSlice')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageGpuSliceDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterGpuSlice')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterGpuSlice(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqGpuSlice_created')?.addEventListener('change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_created')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_created')?.addEventListener('change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_archived')?.addEventListener('change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_archived')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_archived')?.addEventListener('change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_sliceName')?.addEventListener('change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_sliceName')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_sliceName')?.addEventListener('change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_description')?.addEventListener('change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_description')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_description')?.addEventListener('change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_id')?.addEventListener('change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_id')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_id')?.addEventListener('change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_ngsildData')?.addEventListener('change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_location')?.addEventListener('change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_location')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_location')?.addEventListener('change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#fqGpuSlice_displayPage')?.addEventListener('change', (event) => {
            fqChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#buttonFacetGpuSlice_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('GpuSlice', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGpuSlice_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('GpuSlice', event.currentTarget);
          });
});

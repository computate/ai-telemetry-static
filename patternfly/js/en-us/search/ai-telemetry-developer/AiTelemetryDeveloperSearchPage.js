Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeAiTelemetryDeveloper')?.addEventListener('change', (event) => {
    facetRangeChange('AiTelemetryDeveloper', event.target.value);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_created')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'created', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'created', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_modified')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'modified', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'modified', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_archived')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'archived', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'archived', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_name')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'name', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'name', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_description')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'description', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'description', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_authorName')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_authorName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'authorName', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_authorName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'authorName', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_authorUrl')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_authorUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'authorUrl', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_authorUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'authorUrl', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_pageImageUri')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageUri', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageUri', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_pageId')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageId', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageId', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_displayPage')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'displayPage', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_classCanonicalName')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_classSimpleName')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_saves')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'saves', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'saves', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_objectTitle')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'objectTitle', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_editPage')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'editPage', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'editPage', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_userPage')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'userPage', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'userPage', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_download')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'download', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'download', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_objectSuggest')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_objectText')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'objectText', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'objectText', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_solrId')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'solrId', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'solrId', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_courseNum')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_courseNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'courseNum', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_courseNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'courseNum', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_lessonNum')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'lessonNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_lessonNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'lessonNum', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_lessonNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'lessonNum', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_pageImageWidth')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageWidth', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageWidth', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_pageImageHeight')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageHeight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageHeight', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageHeight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageHeight', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_pageImageType')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageType', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageType', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_pageImageAlt')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageAlt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageAlt', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_pageImageAlt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'pageImageAlt', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_prerequisiteArticleIds')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'prerequisiteArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_prerequisiteArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'prerequisiteArticleIds', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_prerequisiteArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'prerequisiteArticleIds', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_nextArticleIds')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'nextArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_nextArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'nextArticleIds', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_nextArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'nextArticleIds', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_labelsString')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'labelsString', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_labelsString')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'labelsString', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_labelsString')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'labelsString', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_labels')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'labels', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_labels')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'labels', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_labels')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'labels', false);
  });

  document.querySelector('#pageSelectSortAiTelemetryDeveloper_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('AiTelemetryDeveloper', 'relatedArticleIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsAiTelemetryDeveloper_relatedArticleIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'relatedArticleIds', true);
  });
  document.querySelector('#pageStatsAiTelemetryDeveloper_relatedArticleIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('AiTelemetryDeveloper', 'relatedArticleIds', false);
  });

  document.querySelector('#htmButton_patchAiTelemetryDeveloper')?.addEventListener('click', (event) => {
    document.querySelector('#patchAiTelemetryDeveloperDialog').open = true;
  });

  document.querySelector('#htmButton_postAiTelemetryDeveloper')?.addEventListener('click', (event) => {
    document.querySelector('#postAiTelemetryDeveloperDialog').open = true;
  });

  document.querySelector('#htmButton_deleteAiTelemetryDeveloper')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteAiTelemetryDeveloper(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportAiTelemetryDeveloper')?.addEventListener('click', (event) => {
    document.querySelector('#putimportAiTelemetryDeveloperDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageAiTelemetryDeveloper')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageAiTelemetryDeveloperDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterAiTelemetryDeveloper')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterAiTelemetryDeveloper(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqAiTelemetryDeveloper_created')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_created')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_created')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_name')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_name')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_name')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_description')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_description')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_description')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_authorName')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_authorName')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_authorUrl')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_authorUrl')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_pageImageUri')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_pageId')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_pageId')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_displayPage')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_editPage')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_userPage')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_download')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_download')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_download')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_courseNum')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_courseNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#fqAiTelemetryDeveloper_lessonNum')?.addEventListener('change', (event) => {
            fqChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#buttonFacetAiTelemetryDeveloper_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotAiTelemetryDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetPivotChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapAiTelemetryDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartAiTelemetryDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeStartChange('AiTelemetryDeveloper', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndAiTelemetryDeveloper_lessonNum')?.addEventListener('change', (event) => {
            facetRangeEndChange('AiTelemetryDeveloper', event.currentTarget);
          });
});

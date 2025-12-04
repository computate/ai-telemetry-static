Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeBareMetalOrder')?.addEventListener('change', (event) => {
    facetRangeChange('BareMetalOrder', event.target.value);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_pk')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'pk', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'pk', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_created')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'created', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'created', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_modified')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'modified', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'modified', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_archived')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'archived', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'archived', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_description')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'description', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'description', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_networkId')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'networkId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_networkId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'networkId', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_networkId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'networkId', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_numberOfFc430')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'numberOfFc430', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_numberOfFc430')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfFc430', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_numberOfFc430')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfFc430', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_numberOfFc830')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'numberOfFc830', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_numberOfFc830')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfFc830', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_numberOfFc830')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfFc830', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_numberOfR730xd')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'numberOfR730xd', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_numberOfR730xd')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfR730xd', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_numberOfR730xd')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfR730xd', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_numberOfWhiteboxFlax1')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'numberOfWhiteboxFlax1', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_numberOfWhiteboxFlax1')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfWhiteboxFlax1', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_numberOfWhiteboxFlax1')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfWhiteboxFlax1', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_numberOfLenovoSd650nv2A100')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'numberOfLenovoSd650nv2A100', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_numberOfLenovoSd650nv2A100')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfLenovoSd650nv2A100', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_numberOfLenovoSd650nv2A100')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfLenovoSd650nv2A100', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_numberOfLenovoSd665nv3H100')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'numberOfLenovoSd665nv3H100', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_numberOfLenovoSd665nv3H100')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfLenovoSd665nv3H100', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_numberOfLenovoSd665nv3H100')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'numberOfLenovoSd665nv3H100', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_image')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'image', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_image')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'image', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_image')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'image', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_sshPublicKey')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'sshPublicKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_sshPublicKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'sshPublicKey', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_sshPublicKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'sshPublicKey', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_floatingIp')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'floatingIp', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_floatingIp')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'floatingIp', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_floatingIp')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'floatingIp', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_status')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'status', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_status')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'status', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_status')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'status', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_classCanonicalName')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_classSimpleName')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_sessionId')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'sessionId', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_userKey')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'userKey', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'userKey', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_saves')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'saves', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'saves', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_objectTitle')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'objectTitle', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_displayPage')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'displayPage', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_editPage')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'editPage', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'editPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_userPage')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'userPage', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'userPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_download')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'download', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'download', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_objectSuggest')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_objectText')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'objectText', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'objectText', false);
  });

  document.querySelector('#pageSelectSortBareMetalOrder_solrId')?.addEventListener('change', (event) => {
    sort('BareMetalOrder', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalOrder_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalOrder', 'solrId', true);
  });
  document.querySelector('#pageStatsBareMetalOrder_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalOrder', 'solrId', false);
  });

  document.querySelector('#htmButton_patchBareMetalOrder')?.addEventListener('click', (event) => {
    document.querySelector('#patchBareMetalOrderDialog').open = true;
  });

  document.querySelector('#htmButton_postBareMetalOrder')?.addEventListener('click', (event) => {
    document.querySelector('#postBareMetalOrderDialog').open = true;
  });

  document.querySelector('#htmButton_deleteBareMetalOrder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pk =  event.currentTarget.getAttribute('data-pk');
      deleteBareMetalOrder(
          event.currentTarget
          , pk
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_searchpageBareMetalOrder')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageBareMetalOrderDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterBareMetalOrder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterBareMetalOrder(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqBareMetalOrder_created')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_created')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_created')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_archived')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_archived')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_archived')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_description')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_description')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_description')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_numberOfFc430')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_numberOfFc430')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_numberOfFc430')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_numberOfFc430')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_numberOfFc430')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_numberOfFc430')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_numberOfFc830')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_numberOfFc830')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_numberOfFc830')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_numberOfFc830')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_numberOfFc830')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_numberOfFc830')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_numberOfR730xd')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_numberOfR730xd')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_numberOfR730xd')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_numberOfR730xd')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_numberOfR730xd')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_numberOfR730xd')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_numberOfWhiteboxFlax1')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_numberOfWhiteboxFlax1')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_numberOfWhiteboxFlax1')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_numberOfWhiteboxFlax1')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_numberOfWhiteboxFlax1')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_numberOfWhiteboxFlax1')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_numberOfLenovoSd650nv2A100')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_numberOfLenovoSd650nv2A100')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_numberOfLenovoSd650nv2A100')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_numberOfLenovoSd650nv2A100')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_numberOfLenovoSd650nv2A100')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_numberOfLenovoSd650nv2A100')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_numberOfLenovoSd665nv3H100')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_numberOfLenovoSd665nv3H100')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_numberOfLenovoSd665nv3H100')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_numberOfLenovoSd665nv3H100')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_numberOfLenovoSd665nv3H100')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_numberOfLenovoSd665nv3H100')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_image')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_image')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_image')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_image')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_image')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_image')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_sshPublicKey')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_sshPublicKey')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_sshPublicKey')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_sshPublicKey')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_sshPublicKey')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_sshPublicKey')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_floatingIp')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_floatingIp')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_floatingIp')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_floatingIp')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_floatingIp')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_floatingIp')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_status')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_status')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_status')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_status')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_status')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_status')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_displayPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_editPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_userPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#fqBareMetalOrder_download')?.addEventListener('change', (event) => {
            fqChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalOrder_download')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalOrder_download')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalOrder_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalOrder_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalOrder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalOrder_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalOrder', event.currentTarget);
          });
});

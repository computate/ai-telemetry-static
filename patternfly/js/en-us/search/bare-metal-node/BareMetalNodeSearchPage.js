Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeBareMetalNode')?.addEventListener('change', (event) => {
    facetRangeChange('BareMetalNode', event.target.value);
  });

  document.querySelector('#pageSelectSortBareMetalNode_pk')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'pk', true);
  });
  document.querySelector('#pageStatsBareMetalNode_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'pk', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_created')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'created', true);
  });
  document.querySelector('#pageStatsBareMetalNode_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'created', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_modified')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'modified', true);
  });
  document.querySelector('#pageStatsBareMetalNode_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'modified', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_archived')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'archived', true);
  });
  document.querySelector('#pageStatsBareMetalNode_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'archived', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_leaseInfo')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'leaseInfo', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_leaseInfo')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'leaseInfo', true);
  });
  document.querySelector('#pageStatsBareMetalNode_leaseInfo')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'leaseInfo', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_networkInfo')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'networkInfo', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_networkInfo')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'networkInfo', true);
  });
  document.querySelector('#pageStatsBareMetalNode_networkInfo')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'networkInfo', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_nodeId')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_nodeId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'nodeId', true);
  });
  document.querySelector('#pageStatsBareMetalNode_nodeId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'nodeId', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_nodeIsMaintenance')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeIsMaintenance', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_nodeIsMaintenance')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'nodeIsMaintenance', true);
  });
  document.querySelector('#pageStatsBareMetalNode_nodeIsMaintenance')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'nodeIsMaintenance', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_nodeLinks')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeLinks', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_nodeLinks')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'nodeLinks', true);
  });
  document.querySelector('#pageStatsBareMetalNode_nodeLinks')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'nodeLinks', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_nodeName')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_nodeName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'nodeName', true);
  });
  document.querySelector('#pageStatsBareMetalNode_nodeName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'nodeName', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_nodePowerState')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodePowerState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_nodePowerState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'nodePowerState', true);
  });
  document.querySelector('#pageStatsBareMetalNode_nodePowerState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'nodePowerState', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_nodeProvisionState')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeProvisionState', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_nodeProvisionState')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'nodeProvisionState', true);
  });
  document.querySelector('#pageStatsBareMetalNode_nodeProvisionState')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'nodeProvisionState', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_nodeResourceClass')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'nodeResourceClass', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_nodeResourceClass')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'nodeResourceClass', true);
  });
  document.querySelector('#pageStatsBareMetalNode_nodeResourceClass')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'nodeResourceClass', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_classCanonicalName')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsBareMetalNode_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_classSimpleName')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsBareMetalNode_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsBareMetalNode_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_sessionId')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'sessionId', true);
  });
  document.querySelector('#pageStatsBareMetalNode_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_userKey')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'userKey', true);
  });
  document.querySelector('#pageStatsBareMetalNode_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'userKey', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_saves')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'saves', true);
  });
  document.querySelector('#pageStatsBareMetalNode_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'saves', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_objectTitle')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'objectTitle', true);
  });
  document.querySelector('#pageStatsBareMetalNode_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_displayPage')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'displayPage', true);
  });
  document.querySelector('#pageStatsBareMetalNode_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_editPage')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'editPage', true);
  });
  document.querySelector('#pageStatsBareMetalNode_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'editPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_userPage')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'userPage', true);
  });
  document.querySelector('#pageStatsBareMetalNode_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'userPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_download')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'download', true);
  });
  document.querySelector('#pageStatsBareMetalNode_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'download', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_objectSuggest')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsBareMetalNode_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_objectText')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'objectText', true);
  });
  document.querySelector('#pageStatsBareMetalNode_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'objectText', false);
  });

  document.querySelector('#pageSelectSortBareMetalNode_solrId')?.addEventListener('change', (event) => {
    sort('BareMetalNode', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNode_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNode', 'solrId', true);
  });
  document.querySelector('#pageStatsBareMetalNode_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNode', 'solrId', false);
  });

  document.querySelector('#htmButton_patchBareMetalNode')?.addEventListener('click', (event) => {
    document.querySelector('#patchBareMetalNodeDialog').open = true;
  });

  document.querySelector('#htmButton_postBareMetalNode')?.addEventListener('click', (event) => {
    document.querySelector('#postBareMetalNodeDialog').open = true;
  });

  document.querySelector('#htmButton_deleteBareMetalNode')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var nodeId =  event.currentTarget.getAttribute('data-nodeId');
      deleteBareMetalNode(
          event.currentTarget
          , nodeId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportBareMetalNode')?.addEventListener('click', (event) => {
    document.querySelector('#putimportBareMetalNodeDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageBareMetalNode')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageBareMetalNodeDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterBareMetalNode')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterBareMetalNode(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqBareMetalNode_created')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_created')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_created')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_archived')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_archived')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_archived')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_leaseInfo')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_leaseInfo')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_leaseInfo')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_leaseInfo')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_leaseInfo')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_leaseInfo')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_networkInfo')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_networkInfo')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_networkInfo')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_networkInfo')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_networkInfo')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_networkInfo')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_nodeId')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_nodeId')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_nodeId')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeIsMaintenance')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeIsMaintenance')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeIsMaintenance')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_nodeIsMaintenance')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_nodeIsMaintenance')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_nodeIsMaintenance')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeLinks')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeLinks')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeLinks')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_nodeLinks')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_nodeLinks')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_nodeLinks')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeName')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeName')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeName')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_nodeName')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_nodeName')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_nodeName')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodePowerState')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodePowerState')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodePowerState')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_nodePowerState')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_nodePowerState')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_nodePowerState')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeProvisionState')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeProvisionState')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeProvisionState')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_nodeProvisionState')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_nodeProvisionState')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_nodeProvisionState')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_nodeResourceClass')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_nodeResourceClass')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_nodeResourceClass')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_nodeResourceClass')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_nodeResourceClass')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_nodeResourceClass')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_displayPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_editPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_userPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNode_download')?.addEventListener('change', (event) => {
            fqChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNode_download')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNode_download')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNode_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNode_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNode', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNode_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNode', event.currentTarget);
          });
});

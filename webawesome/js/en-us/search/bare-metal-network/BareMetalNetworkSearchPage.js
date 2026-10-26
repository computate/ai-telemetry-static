Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeBareMetalNetwork')?.addEventListener('change', (event) => {
    facetRangeChange('BareMetalNetwork', event.target.value);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_pk')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'pk', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'pk', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_created')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'created', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'created', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_modified')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'modified', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'modified', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_archived')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'archived', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'archived', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_id')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'id', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'id', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_name')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'name', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'name', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_description')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'description', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'description', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_availabilityZoneHints')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'availabilityZoneHints', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_availabilityZoneHints')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'availabilityZoneHints', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_availabilityZoneHints')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'availabilityZoneHints', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_availabilityZones')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'availabilityZones', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_availabilityZones')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'availabilityZones', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_availabilityZones')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'availabilityZones', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_createdAt')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'createdAt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_createdAt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'createdAt', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_createdAt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'createdAt', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_dnsDomain')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'dnsDomain', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_dnsDomain')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'dnsDomain', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_dnsDomain')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'dnsDomain', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_mtu')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'mtu', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_mtu')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'mtu', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_mtu')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'mtu', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_projectId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'projectId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_projectId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'projectId', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_projectId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'projectId', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_providerNetworkType')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'providerNetworkType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_providerNetworkType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'providerNetworkType', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_providerNetworkType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'providerNetworkType', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'providerPhysicalNetwork', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'providerPhysicalNetwork', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'providerPhysicalNetwork', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_providerSegmentationId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'providerSegmentationId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_providerSegmentationId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'providerSegmentationId', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_providerSegmentationId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'providerSegmentationId', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_qosPolicyId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'qosPolicyId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_qosPolicyId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'qosPolicyId', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_qosPolicyId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'qosPolicyId', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_revisionNumber')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'revisionNumber', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_revisionNumber')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'revisionNumber', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_revisionNumber')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'revisionNumber', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_status')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'status', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_status')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'status', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_status')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'status', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_subnetIds')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'subnetIds', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_subnetIds')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'subnetIds', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_subnetIds')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'subnetIds', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_tags')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'tags', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_tags')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'tags', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_tags')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'tags', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_tenantId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'tenantId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_tenantId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'tenantId', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_tenantId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'tenantId', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_updatedAt')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'updatedAt', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_updatedAt')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'updatedAt', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_updatedAt')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'updatedAt', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_isAdminStateUp')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isAdminStateUp', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_isAdminStateUp')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'isAdminStateUp', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_isAdminStateUp')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'isAdminStateUp', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_isDefault')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isDefault', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_isDefault')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'isDefault', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_isDefault')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'isDefault', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isPortSecurityEnabled', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'isPortSecurityEnabled', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'isPortSecurityEnabled', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_isRouterExternal')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isRouterExternal', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_isRouterExternal')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'isRouterExternal', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_isRouterExternal')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'isRouterExternal', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_isShared')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isShared', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_isShared')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'isShared', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_isShared')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'isShared', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_isVlanQueing')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isVlanQueing', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_isVlanQueing')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'isVlanQueing', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_isVlanQueing')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'isVlanQ
Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
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
    facetStatsChange('BareMetalNetwork', 'isVlanQueing', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_isVlanTransparent')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'isVlanTransparent', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_isVlanTransparent')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'isVlanTransparent', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_isVlanTransparent')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'isVlanTransparent', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_l2Adjacency')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'l2Adjacency', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_l2Adjacency')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'l2Adjacency', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_l2Adjacency')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'l2Adjacency', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_locationCloud')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationCloud', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_locationCloud')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationCloud', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_locationCloud')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationCloud', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_locationProjectDomainId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationProjectDomainId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_locationProjectDomainId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationProjectDomainId', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_locationProjectDomainId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationProjectDomainId', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_locationProjectDomainName')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationProjectDomainName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_locationProjectDomainName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationProjectDomainName', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_locationProjectDomainName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationProjectDomainName', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_locationProjectId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationProjectId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_locationProjectId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationProjectId', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_locationProjectId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationProjectId', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_locationProjectName')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationProjectName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_locationProjectName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationProjectName', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_locationProjectName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationProjectName', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_locationRegionName')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationRegionName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_locationRegionName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationRegionName', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_locationRegionName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationRegionName', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_locationZone')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'locationZone', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_locationZone')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationZone', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_locationZone')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'locationZone', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_classCanonicalName')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_classSimpleName')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_sessionId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'sessionId', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_userKey')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'userKey', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'userKey', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_saves')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'saves', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'saves', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_objectTitle')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'objectTitle', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_displayPage')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'displayPage', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_editPage')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'editPage', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'editPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_userPage')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'userPage', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'userPage', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_download')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'download', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'download', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_objectSuggest')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_objectText')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'objectText', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'objectText', false);
  });

  document.querySelector('#pageSelectSortBareMetalNetwork_solrId')?.addEventListener('change', (event) => {
    sort('BareMetalNetwork', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsBareMetalNetwork_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('BareMetalNetwork', 'solrId', true);
  });
  document.querySelector('#pageStatsBareMetalNetwork_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('BareMetalNetwork', 'solrId', false);
  });

  document.querySelector('#htmButton_patchBareMetalNetwork')?.addEventListener('click', (event) => {
    document.querySelector('#patchBareMetalNetworkDialog').open = true;
  });

  document.querySelector('#htmButton_postBareMetalNetwork')?.addEventListener('click', (event) => {
    document.querySelector('#postBareMetalNetworkDialog').open = true;
  });

  document.querySelector('#htmButton_deleteBareMetalNetwork')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var id =  event.currentTarget.getAttribute('data-id');
      deleteBareMetalNetwork(
          event.currentTarget
          , id
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportBareMetalNetwork')?.addEventListener('click', (event) => {
    document.querySelector('#putimportBareMetalNetworkDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageBareMetalNetwork')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageBareMetalNetworkDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterBareMetalNetwork')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterBareMetalNetwork(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqBareMetalNetwork_created')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_created')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_created')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_archived')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_archived')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_archived')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_id')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_id')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_id')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_name')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_name')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_name')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_description')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_description')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_description')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_availabilityZoneHints')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_availabilityZoneHints')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_availabilityZoneHints')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_availabilityZoneHints')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_availabilityZoneHints')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_availabilityZoneHints')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_availabilityZones')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_availabilityZones')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_availabilityZones')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_availabilityZones')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_availabilityZones')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_availabilityZones')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_createdAt')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_createdAt')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_createdAt')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_createdAt')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_createdAt')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_createdAt')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_dnsDomain')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_dnsDomain')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_dnsDomain')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_dnsDomain')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_dnsDomain')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_dnsDomain')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_mtu')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_mtu')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_mtu')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_mtu')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_mtu')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_mtu')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_projectId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_projectId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_projectId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_projectId')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_projectId')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_projectId')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_providerNetworkType')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_providerNetworkType')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_providerNetworkType')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_providerNetworkType')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_providerNetworkType')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_providerNetworkType')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_providerPhysicalNetwork')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_providerSegmentationId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_providerSegmentationId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_providerSegmentationId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_providerSegmentationId')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_providerSegmentationId')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_providerSegmentationId')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_qosPolicyId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_qosPolicyId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_qosPolicyId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_qosPolicyId')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_qosPolicyId')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_qosPolicyId')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_revisionNumber')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_revisionNumber')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_revisionNumber')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_revisionNumber')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_revisionNumber')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_revisionNumber')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_status')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_status')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_status')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_status')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_status')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_status')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_subnetIds')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_subnetIds')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_subnetIds')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_subnetIds')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_subnetIds')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_subnetIds')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_tags')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_tags')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_tags')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_tags')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_tags')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_tags')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_tenantId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_tenantId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_tenantId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_tenantId')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_tenantId')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_tenantId')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_updatedAt')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_updatedAt')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_updatedAt')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_updatedAt')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_updatedAt')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_updatedAt')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isAdminStateUp')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isAdminStateUp')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isAdminStateUp')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_isAdminStateUp')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_isAdminStateUp')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_isAdminStateUp')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isDefault')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isDefault')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isDefault')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_isDefault')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_isDefault')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_isDefault')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_isPortSecurityEnabled')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isRouterExternal')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isRouterExternal')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isRouterExternal')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_isRouterExternal')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_isRouterExternal')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_isRouterExternal')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isShared')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isShared')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isShared')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_isShared')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_isShared')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_isShared')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isVlanQueing')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isVlanQueing')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isVlanQueing')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_isVlanQueing')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_isVlanQueing')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_isVlanQueing')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_isVlanTransparent')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_isVlanTransparent')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_isVlanTransparent')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_isVlanTransparent')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_isVlanTransparent')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_isVlanTransparent')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_l2Adjacency')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_l2Adjacency')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_l2Adjacency')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_l2Adjacency')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_l2Adjacency')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_l2Adjacency')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationCloud')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationCloud')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationCloud')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_locationCloud')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_locationCloud')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_locationCloud')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationProjectDomainId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationProjectDomainId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationProjectDomainId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_locationProjectDomainId')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_locationProjectDomainId')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_locationProjectDomainId')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationProjectDomainName')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationProjectDomainName')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationProjectDomainName')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_locationProjectDomainName')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_locationProjectDomainName')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_locationProjectDomainName')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationProjectId')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationProjectId')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationProjectId')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_locationProjectId')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_locationProjectId')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_locationProjectId')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationProjectName')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationProjectName')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationProjectName')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_locationProjectName')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_locationProjectName')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_locationProjectName')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationRegionName')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationRegionName')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationRegionName')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_locationRegionName')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_locationRegionName')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_locationRegionName')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_locationZone')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_locationZone')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_locationZone')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_locationZone')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_locationZone')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_locationZone')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_displayPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_editPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_userPage')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#fqBareMetalNetwork_download')?.addEventListener('change', (event) => {
            fqChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#buttonFacetBareMetalNetwork_download')?.addEventListener('click', (event) => {
            facetFieldChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotBareMetalNetwork_download')?.addEventListener('change', (event) => {
            facetPivotChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapBareMetalNetwork_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartBareMetalNetwork_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('BareMetalNetwork', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndBareMetalNetwork_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('BareMetalNetwork', event.currentTarget);
          });
});

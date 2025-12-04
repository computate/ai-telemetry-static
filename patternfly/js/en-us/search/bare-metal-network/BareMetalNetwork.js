
// Search //

async function searchBareMetalNetwork($formFilters, success, error) {
  var filters = searchBareMetalNetworkFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchBareMetalNetworkVals(filters, target, success, error);
}

function searchBareMetalNetworkFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterAvailabilityZoneHints = $formFilters.querySelector('.valueAvailabilityZoneHints')?.value;
    if(filterAvailabilityZoneHints != null && filterAvailabilityZoneHints !== '')
      filters.push({ name: 'fq', value: 'availabilityZoneHints:' + filterAvailabilityZoneHints });

    var filterAvailabilityZones = $formFilters.querySelector('.valueAvailabilityZones')?.value;
    if(filterAvailabilityZones != null && filterAvailabilityZones !== '')
      filters.push({ name: 'fq', value: 'availabilityZones:' + filterAvailabilityZones });

    var filterCreatedAt = $formFilters.querySelector('.valueCreatedAt')?.value;
    if(filterCreatedAt != null && filterCreatedAt !== '')
      filters.push({ name: 'fq', value: 'createdAt:' + filterCreatedAt });

    var filterDnsDomain = $formFilters.querySelector('.valueDnsDomain')?.value;
    if(filterDnsDomain != null && filterDnsDomain !== '')
      filters.push({ name: 'fq', value: 'dnsDomain:' + filterDnsDomain });

    var filterMtu = $formFilters.querySelector('.valueMtu')?.value;
    if(filterMtu != null && filterMtu !== '')
      filters.push({ name: 'fq', value: 'mtu:' + filterMtu });

    var filterProjectId = $formFilters.querySelector('.valueProjectId')?.value;
    if(filterProjectId != null && filterProjectId !== '')
      filters.push({ name: 'fq', value: 'projectId:' + filterProjectId });

    var filterProviderNetworkType = $formFilters.querySelector('.valueProviderNetworkType')?.value;
    if(filterProviderNetworkType != null && filterProviderNetworkType !== '')
      filters.push({ name: 'fq', value: 'providerNetworkType:' + filterProviderNetworkType });

    var filterProviderPhysicalNetwork = $formFilters.querySelector('.valueProviderPhysicalNetwork')?.value;
    if(filterProviderPhysicalNetwork != null && filterProviderPhysicalNetwork !== '')
      filters.push({ name: 'fq', value: 'providerPhysicalNetwork:' + filterProviderPhysicalNetwork });

    var filterProviderSegmentationId = $formFilters.querySelector('.valueProviderSegmentationId')?.value;
    if(filterProviderSegmentationId != null && filterProviderSegmentationId !== '')
      filters.push({ name: 'fq', value: 'providerSegmentationId:' + filterProviderSegmentationId });

    var filterQosPolicyId = $formFilters.querySelector('.valueQosPolicyId')?.value;
    if(filterQosPolicyId != null && filterQosPolicyId !== '')
      filters.push({ name: 'fq', value: 'qosPolicyId:' + filterQosPolicyId });

    var filterRevisionNumber = $formFilters.querySelector('.valueRevisionNumber')?.value;
    if(filterRevisionNumber != null && filterRevisionNumber !== '')
      filters.push({ name: 'fq', value: 'revisionNumber:' + filterRevisionNumber });

    var filterStatus = $formFilters.querySelector('.valueStatus')?.value;
    if(filterStatus != null && filterStatus !== '')
      filters.push({ name: 'fq', value: 'status:' + filterStatus });

    var filterSubnetIds = $formFilters.querySelector('.valueSubnetIds')?.value;
    if(filterSubnetIds != null && filterSubnetIds !== '')
      filters.push({ name: 'fq', value: 'subnetIds:' + filterSubnetIds });

    var filterTags = $formFilters.querySelector('.valueTags')?.value;
    if(filterTags != null && filterTags !== '')
      filters.push({ name: 'fq', value: 'tags:' + filterTags });

    var filterTenantId = $formFilters.querySelector('.valueTenantId')?.value;
    if(filterTenantId != null && filterTenantId !== '')
      filters.push({ name: 'fq', value: 'tenantId:' + filterTenantId });

    var filterUpdatedAt = $formFilters.querySelector('.valueUpdatedAt')?.value;
    if(filterUpdatedAt != null && filterUpdatedAt !== '')
      filters.push({ name: 'fq', value: 'updatedAt:' + filterUpdatedAt });

    var $filterIsAdminStateUpCheckbox = $formFilters.querySelector('input.valueIsAdminStateUp[type = "checkbox"]');
    var $filterIsAdminStateUpSelect = $formFilters.querySelector('select.valueIsAdminStateUp');
    var filterIsAdminStateUp = $filterIsAdminStateUpSelect.length ? $filterIsAdminStateUpSelect.value : $filterIsAdminStateUpCheckbox.checked;
    var filterIsAdminStateUpSelectVal = $formFilters.querySelector('select.filterIsAdminStateUp')?.value;
    var filterIsAdminStateUp = null;
    if(filterIsAdminStateUpSelectVal !== '')
      filterIsAdminStateUp = filterIsAdminStateUpSelectVal == 'true';
    if(filterIsAdminStateUp != null && filterIsAdminStateUp === true)
      filters.push({ name: 'fq', value: 'isAdminStateUp:' + filterIsAdminStateUp });

    var $filterIsDefaultCheckbox = $formFilters.querySelector('input.valueIsDefault[type = "checkbox"]');
    var $filterIsDefaultSelect = $formFilters.querySelector('select.valueIsDefault');
    var filterIsDefault = $filterIsDefaultSelect.length ? $filterIsDefaultSelect.value : $filterIsDefaultCheckbox.checked;
    var filterIsDefaultSelectVal = $formFilters.querySelector('select.filterIsDefault')?.value;
    var filterIsDefault = null;
    if(filterIsDefaultSelectVal !== '')
      filterIsDefault = filterIsDefaultSelectVal == 'true';
    if(filterIsDefault != null && filterIsDefault === true)
      filters.push({ name: 'fq', value: 'isDefault:' + filterIsDefault });

    var $filterIsPortSecurityEnabledCheckbox = $formFilters.querySelector('input.valueIsPortSecurityEnabled[type = "checkbox"]');
    var $filterIsPortSecurityEnabledSelect = $formFilters.querySelector('select.valueIsPortSecurityEnabled');
    var filterIsPortSecurityEnabled = $filterIsPortSecurityEnabledSelect.length ? $filterIsPortSecurityEnabledSelect.value : $filterIsPortSecurityEnabledCheckbox.checked;
    var filterIsPortSecurityEnabledSelectVal = $formFilters.querySelector('select.filterIsPortSecurityEnabled')?.value;
    var filterIsPortSecurityEnabled = null;
    if(filterIsPortSecurityEnabledSelectVal !== '')
      filterIsPortSecurityEnabled = filterIsPortSecurityEnabledSelectVal == 'true';
    if(filterIsPortSecurityEnabled != null && filterIsPortSecurityEnabled === true)
      filters.push({ name: 'fq', value: 'isPortSecurityEnabled:' + filterIsPortSecurityEnabled });

    var $filterIsRouterExternalCheckbox = $formFilters.querySelector('input.valueIsRouterExternal[type = "checkbox"]');
    var $filterIsRouterExternalSelect = $formFilters.querySelector('select.valueIsRouterExternal');
    var filterIsRouterExternal = $filterIsRouterExternalSelect.length ? $filterIsRouterExternalSelect.value : $filterIsRouterExternalCheckbox.checked;
    var filterIsRouterExternalSelectVal = $formFilters.querySelector('select.filterIsRouterExternal')?.value;
    var filterIsRouterExternal = null;
    if(filterIsRouterExternalSelectVal !== '')
      filterIsRouterExternal = filterIsRouterExternalSelectVal == 'true';
    if(filterIsRouterExternal != null && filterIsRouterExternal === true)
      filters.push({ name: 'fq', value: 'isRouterExternal:' + filterIsRouterExternal });

    var $filterIsSharedCheckbox = $formFilters.querySelector('input.valueIsShared[type = "checkbox"]');
    var $filterIsSharedSelect = $formFilters.querySelector('select.valueIsShared');
    var filterIsShared = $filterIsSharedSelect.length ? $filterIsSharedSelect.value : $filterIsSharedCheckbox.checked;
    var filterIsSharedSelectVal = $formFilters.querySelector('select.filterIsShared')?.value;
    var filterIsShared = null;
    if(filterIsSharedSelectVal !== '')
      filterIsShared = filterIsSharedSelectVal == 'true';
    if(filterIsShared != null && filterIsShared === true)
      filters.push({ name: 'fq', value: 'isShared:' + filterIsShared });

    var $filterIsVlanQueingCheckbox = $formFilters.querySelector('input.valueIsVlanQueing[type = "checkbox"]');
    var $filterIsVlanQueingSelect = $formFilters.querySelector('select.valueIsVlanQueing');
    var filterIsVlanQueing = $filterIsVlanQueingSelect.length ? $filterIsVlanQueingSelect.value : $filterIsVlanQueingCheckbox.checked;
    var filterIsVlanQueingSelectVal = $formFilters.querySelector('select.filterIsVlanQueing')?.value;
    var filterIsVlanQueing = null;
    if(filterIsVlanQueingSelectVal !== '')
      filterIsVlanQueing = filterIsVlanQueingSelectVal == 'true';
    if(filterIsVlanQueing != null && filterIsVlanQueing === true)
      filters.push({ name: 'fq', value: 'isVlanQueing:' + filterIsVlanQueing });

    var $filterIsVlanTransparentCheckbox = $formFilters.querySelector('input.valueIsVlanTransparent[type = "checkbox"]');
    var $filterIsVlanTransparentSelect = $formFilters.querySelector('select.valueIsVlanTransparent');
    var filterIsVlanTransparent = $filterIsVlanTransparentSelect.length ? $filterIsVlanTransparentSelect.value : $filterIsVlanTransparentCheckbox.checked;
    var filterIsVlanTransparentSelectVal = $formFilters.querySelector('select.filterIsVlanTransparent')?.value;
    var filterIsVlanTransparent = null;
    if(filterIsVlanTransparentSelectVal !== '')
      filterIsVlanTransparent = filterIsVlanTransparentSelectVal == 'true';
    if(filterIsVlanTransparent != null && filterIsVlanTransparent === true)
      filters.push({ name: 'fq', value: 'isVlanTransparent:' + filterIsVlanTransparent });

    var $filterL2AdjacencyCheckbox = $formFilters.querySelector('input.valueL2Adjacency[type = "checkbox"]');
    var $filterL2AdjacencySelect = $formFilters.querySelector('select.valueL2Adjacency');
    var filterL2Adjacency = $filterL2AdjacencySelect.length ? $filterL2AdjacencySelect.value : $filterL2AdjacencyCheckbox.checked;
    var filterL2AdjacencySelectVal = $formFilters.querySelector('select.filterL2Adjacency')?.value;
    var filterL2Adjacency = null;
    if(filterL2AdjacencySelectVal !== '')
      filterL2Adjacency = filterL2AdjacencySelectVal == 'true';
    if(filterL2Adjacency != null && filterL2Adjacency === true)
      filters.push({ name: 'fq', value: 'l2Adjacency:' + filterL2Adjacency });

    var filterLocationCloud = $formFilters.querySelector('.valueLocationCloud')?.value;
    if(filterLocationCloud != null && filterLocationCloud !== '')
      filters.push({ name: 'fq', value: 'locationCloud:' + filterLocationCloud });

    var filterLocationProjectDomainId = $formFilters.querySelector('.valueLocationProjectDomainId')?.value;
    if(filterLocationProjectDomainId != null && filterLocationProjectDomainId !== '')
      filters.push({ name: 'fq', value: 'locationProjectDomainId:' + filterLocationProjectDomainId });

    var filterLocationProjectDomainName = $formFilters.querySelector('.valueLocationProjectDomainName')?.value;
    if(filterLocationProjectDomainName != null && filterLocationProjectDomainName !== '')
      filters.push({ name: 'fq', value: 'locationProjectDomainName:' + filterLocationProjectDomainName });

    var filterLocationProjectId = $formFilters.querySelector('.valueLocationProjectId')?.value;
    if(filterLocationProjectId != null && filterLocationProjectId !== '')
      filters.push({ name: 'fq', value: 'locationProjectId:' + filterLocationProjectId });

    var filterLocationProjectName = $formFilters.querySelector('.valueLocationProjectName')?.value;
    if(filterLocationProjectName != null && filterLocationProjectName !== '')
      filters.push({ name: 'fq', value: 'locationProjectName:' + filterLocationProjectName });

    var filterLocationRegionName = $formFilters.querySelector('.valueLocationRegionName')?.value;
    if(filterLocationRegionName != null && filterLocationRegionName !== '')
      filters.push({ name: 'fq', value: 'locationRegionName:' + filterLocationRegionName });

    var filterLocationZone = $formFilters.querySelector('.valueLocationZone')?.value;
    if(filterLocationZone != null && filterLocationZone !== '')
      filters.push({ name: 'fq', value: 'locationZone:' + filterLocationZone });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });
  }
  return filters;
}

function searchBareMetalNetworkVals(filters, target, success, error) {

  fetch(
    '/en-us/api/bare-metal-network?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function suggestBareMetalNetworkObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-duotone fa-regular fa-network-wired"></i>');
        var $span = document.createElement('span');        $span.setAttribute('class', '');        $span.innerText = o['objectTitle'];
        var $li = document.createElement('li');
        var $a = document.createElement('a').setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchBareMetalNetworkVals($formFilters, target, success, error);
}

// GET //

async function getBareMetalNetwork(pk) {
  fetch(
    '/en-us/api/bare-metal-network/' + id
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PATCH //

async function patchBareMetalNetwork($formFilters, $formValues, target, id, success, error) {
  var filters = patchBareMetalNetworkFilters($formFilters);

  var vals = {};

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  var removePk = $formValues.querySelector('.removePk')?.value === 'true';
  var setPk = removePk ? null : $formValues.querySelector('.setPk')?.value;
  var addPk = $formValues.querySelector('.addPk')?.value;
  if(removePk || setPk != null && setPk !== '')
    vals['setPk'] = setPk;
  if(addPk != null && addPk !== '')
    vals['addPk'] = addPk;
  var removePk = $formValues.querySelector('.removePk')?.value;
  if(removePk != null && removePk !== '')
    vals['removePk'] = removePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value === 'true';
  var setCreated = removeCreated ? null : $formValues.querySelector('.setCreated')?.value;
  var addCreated = $formValues.querySelector('.addCreated')?.value;
  if(removeCreated || setCreated != null && setCreated !== '')
    vals['setCreated'] = setCreated;
  if(addCreated != null && addCreated !== '')
    vals['addCreated'] = addCreated;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value;
  if(removeCreated != null && removeCreated !== '')
    vals['removeCreated'] = removeCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  var removeModified = $formValues.querySelector('.removeModified')?.value === 'true';
  var setModified = removeModified ? null : $formValues.querySelector('.setModified')?.value;
  var addModified = $formValues.querySelector('.addModified')?.value;
  if(removeModified || setModified != null && setModified !== '')
    vals['setModified'] = setModified;
  if(addModified != null && addModified !== '')
    vals['addModified'] = addModified;
  var removeModified = $formValues.querySelector('.removeModified')?.value;
  if(removeModified != null && removeModified !== '')
    vals['removeModified'] = removeModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  var removeArchived = $formValues.querySelector('.removeArchived')?.value === 'true';
  if(valueArchived != null)
    valueArchived = valueArchived === 'true';
  var valueArchivedSelectVal = $formValues.querySelector('select.setArchived')?.value;
  if(valueArchivedSelectVal != null)
    valueArchivedSelectVal = valueArchivedSelectVal === 'true';
  if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
    valueArchived = valueArchivedSelectVal == 'true';
  var setArchived = removeArchived ? null : valueArchived;
  var addArchived = $formValues.querySelector('.addArchived')?.checked;
  if(removeArchived || setArchived != null && setArchived !== '')
    vals['setArchived'] = setArchived;
  if(addArchived != null && addArchived !== '')
    vals['addArchived'] = addArchived;
  var removeArchived = $formValues.querySelector('.removeArchived')?.checked;
  if(removeArchived != null && removeArchived !== '')
    vals['removeArchived'] = removeArchived;

  var valueId = $formValues.querySelector('.valueId')?.value;
  var removeId = $formValues.querySelector('.removeId')?.value === 'true';
  var setId = removeId ? null : $formValues.querySelector('.setId')?.value;
  var addId = $formValues.querySelector('.addId')?.value;
  if(removeId || setId != null && setId !== '')
    vals['setId'] = setId;
  if(addId != null && addId !== '')
    vals['addId'] = addId;
  var removeId = $formValues.querySelector('.removeId')?.value;
  if(removeId != null && removeId !== '')
    vals['removeId'] = removeId;

  var valueName = $formValues.querySelector('.valueName')?.value;
  var removeName = $formValues.querySelector('.removeName')?.value === 'true';
  var setName = removeName ? null : $formValues.querySelector('.setName')?.value;
  var addName = $formValues.querySelector('.addName')?.value;
  if(removeName || setName != null && setName !== '')
    vals['setName'] = setName;
  if(addName != null && addName !== '')
    vals['addName'] = addName;
  var removeName = $formValues.querySelector('.removeName')?.value;
  if(removeName != null && removeName !== '')
    vals['removeName'] = removeName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value === 'true';
  var setDescription = removeDescription ? null : $formValues.querySelector('.setDescription')?.value;
  var addDescription = $formValues.querySelector('.addDescription')?.value;
  if(removeDescription || setDescription != null && setDescription !== '')
    vals['setDescription'] = setDescription;
  if(addDescription != null && addDescription !== '')
    vals['addDescription'] = addDescription;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value;
  if(removeDescription != null && removeDescription !== '')
    vals['removeDescription'] = removeDescription;

  var valueAvailabilityZoneHints = $formValues.querySelector('.valueAvailabilityZoneHints')?.value;
  var removeAvailabilityZoneHints = $formValues.querySelector('.removeAvailabilityZoneHints')?.value === 'true';
  var setAvailabilityZoneHints = removeAvailabilityZoneHints ? null : $formValues.querySelector('.setAvailabilityZoneHints')?.value;
  var addAvailabilityZoneHints = $formValues.querySelector('.addAvailabilityZoneHints')?.value;
  if(removeAvailabilityZoneHints || setAvailabilityZoneHints != null && setAvailabilityZoneHints !== '')
    vals['setAvailabilityZoneHints'] = JSON.parse(setAvailabilityZoneHints);
  if(addAvailabilityZoneHints != null && addAvailabilityZoneHints !== '')
    vals['addAvailabilityZoneHints'] = addAvailabilityZoneHints;
  var removeAvailabilityZoneHints = $formValues.querySelector('.removeAvailabilityZoneHints')?.value;
  if(removeAvailabilityZoneHints != null && removeAvailabilityZoneHints !== '')
    vals['removeAvailabilityZoneHints'] = removeAvailabilityZoneHints;

  var valueAvailabilityZones = $formValues.querySelector('.valueAvailabilityZones')?.value;
  var removeAvailabilityZones = $formValues.querySelector('.removeAvailabilityZones')?.value === 'true';
  var setAvailabilityZones = removeAvailabilityZones ? null : $formValues.querySelector('.setAvailabilityZones')?.value;
  var addAvailabilityZones = $formValues.querySelector('.addAvailabilityZones')?.value;
  if(removeAvailabilityZones || setAvailabilityZones != null && setAvailabilityZones !== '')
    vals['setAvailabilityZones'] = JSON.parse(setAvailabilityZones);
  if(addAvailabilityZones != null && addAvailabilityZones !== '')
    vals['addAvailabilityZones'] = addAvailabilityZones;
  var removeAvailabilityZones = $formValues.querySelector('.removeAvailabilityZones')?.value;
  if(removeAvailabilityZones != null && removeAvailabilityZones !== '')
    vals['removeAvailabilityZones'] = removeAvailabilityZones;

  var valueCreatedAt = $formValues.querySelector('.valueCreatedAt')?.value;
  var removeCreatedAt = $formValues.querySelector('.removeCreatedAt')?.value === 'true';
  var setCreatedAt = removeCreatedAt ? null : $formValues.querySelector('.setCreatedAt')?.value;
  var addCreatedAt = $formValues.querySelector('.addCreatedAt')?.value;
  if(removeCreatedAt || setCreatedAt != null && setCreatedAt !== '')
    vals['setCreatedAt'] = setCreatedAt;
  if(addCreatedAt != null && addCreatedAt !== '')
    vals['addCreatedAt'] = addCreatedAt;
  var removeCreatedAt = $formValues.querySelector('.removeCreatedAt')?.value;
  if(removeCreatedAt != null && removeCreatedAt !== '')
    vals['removeCreatedAt'] = removeCreatedAt;

  var valueDnsDomain = $formValues.querySelector('.valueDnsDomain')?.value;
  var removeDnsDomain = $formValues.querySelector('.removeDnsDomain')?.value === 'true';
  var setDnsDomain = removeDnsDomain ? null : $formValues.querySelector('.setDnsDomain')?.value;
  var addDnsDomain = $formValues.querySelector('.addDnsDomain')?.value;
  if(removeDnsDomain || setDnsDomain != null && setDnsDomain !== '')
    vals['setDnsDomain'] = setDnsDomain;
  if(addDnsDomain != null && addDnsDomain !== '')
    vals['addDnsDomain'] = addDnsDomain;
  var removeDnsDomain = $formValues.querySelector('.removeDnsDomain')?.value;
  if(removeDnsDomain != null && removeDnsDomain !== '')
    vals['removeDnsDomain'] = removeDnsDomain;

  var valueMtu = $formValues.querySelector('.valueMtu')?.value;
  var removeMtu = $formValues.querySelector('.removeMtu')?.value === 'true';
  var setMtu = removeMtu ? null : $formValues.querySelector('.setMtu')?.value;
  var addMtu = $formValues.querySelector('.addMtu')?.value;
  if(removeMtu || setMtu != null && setMtu !== '')
    vals['setMtu'] = setMtu;
  if(addMtu != null && addMtu !== '')
    vals['addMtu'] = addMtu;
  var removeMtu = $formValues.querySelector('.removeMtu')?.value;
  if(removeMtu != null && removeMtu !== '')
    vals['removeMtu'] = removeMtu;

  var valueProjectId = $formValues.querySelector('.valueProjectId')?.value;
  var removeProjectId = $formValues.querySelector('.removeProjectId')?.value === 'true';
  var setProjectId = removeProjectId ? null : $formValues.querySelector('.setProjectId')?.value;
  var addProjectId = $formValues.querySelector('.addProjectId')?.value;
  if(removeProjectId || setProjectId != null && setProjectId !== '')
    vals['setProjectId'] = setProjectId;
  if(addProjectId != null && addProjectId !== '')
    vals['addProjectId'] = addProjectId;
  var removeProjectId = $formValues.querySelector('.removeProjectId')?.value;
  if(removeProjectId != null && removeProjectId !== '')
    vals['removeProjectId'] = removeProjectId;

  var valueProviderNetworkType = $formValues.querySelector('.valueProviderNetworkType')?.value;
  var removeProviderNetworkType = $formValues.querySelector('.removeProviderNetworkType')?.value === 'true';
  var setProviderNetworkType = removeProviderNetworkType ? null : $formValues.querySelector('.setProviderNetworkType')?.value;
  var addProviderNetworkType = $formValues.querySelector('.addProviderNetworkType')?.value;
  if(removeProviderNetworkType || setProviderNetworkType != null && setProviderNetworkType !== '')
    vals['setProviderNetworkType'] = setProviderNetworkType;
  if(addProviderNetworkType != null && addProviderNetworkType !== '')
    vals['addProviderNetworkType'] = addProviderNetworkType;
  var removeProviderNetworkType = $formValues.querySelector('.removeProviderNetworkType')?.value;
  if(removeProviderNetworkType != null && removeProviderNetworkType !== '')
    vals['removeProviderNetworkType'] = removeProviderNetworkType;

  var valueProviderPhysicalNetwork = $formValues.querySelector('.valueProviderPhysicalNetwork')?.value;
  var removeProviderPhysicalNetwork = $formValues.querySelector('.removeProviderPhysicalNetwork')?.value === 'true';
  var setProviderPhysicalNetwork = removeProviderPhysicalNetwork ? null : $formValues.querySelector('.setProviderPhysicalNetwork')?.value;
  var addProviderPhysicalNetwork = $formValues.querySelector('.addProviderPhysicalNetwork')?.value;
  if(removeProviderPhysicalNetwork || setProviderPhysicalNetwork != null && setProviderPhysicalNetwork !== '')
    vals['setProviderPhysicalNetwork'] = setProviderPhysicalNetwork;
  if(addProviderPhysicalNetwork != null && addProviderPhysicalNetwork !== '')
    vals['addProviderPhysicalNetwork'] = addProviderPhysicalNetwork;
  var removeProviderPhysicalNetwork = $formValues.querySelector('.removeProviderPhysicalNetwork')?.value;
  if(removeProviderPhysicalNetwork != null && removeProviderPhysicalNetwork !== '')
    vals['removeProviderPhysicalNetwork'] = removeProviderPhysicalNetwork;

  var valueProviderSegmentationId = $formValues.querySelector('.valueProviderSegmentationId')?.value;
  var removeProviderSegmentationId = $formValues.querySelector('.removeProviderSegmentationId')?.value === 'true';
  var setProviderSegmentationId = removeProviderSegmentationId ? null : $formValues.querySelector('.setProviderSegmentationId')?.value;
  var addProviderSegmentationId = $formValues.querySelector('.addProviderSegmentationId')?.value;
  if(removeProviderSegmentationId || setProviderSegmentationId != null && setProviderSegmentationId !== '')
    vals['setProviderSegmentationId'] = setProviderSegmentationId;
  if(addProviderSegmentationId != null && addProviderSegmentationId !== '')
    vals['addProviderSegmentationId'] = addProviderSegmentationId;
  var removeProviderSegmentationId = $formValues.querySelector('.removeProviderSegmentationId')?.value;
  if(removeProviderSegmentationId != null && removeProviderSegmentationId !== '')
    vals['removeProviderSegmentationId'] = removeProviderSegmentationId;

  var valueQosPolicyId = $formValues.querySelector('.valueQosPolicyId')?.value;
  var removeQosPolicyId = $formValues.querySelector('.removeQosPolicyId')?.value === 'true';
  var setQosPolicyId = removeQosPolicyId ? null : $formValues.querySelector('.setQosPolicyId')?.value;
  var addQosPolicyId = $formValues.querySelector('.addQosPolicyId')?.value;
  if(removeQosPolicyId || setQosPolicyId != null && setQosPolicyId !== '')
    vals['setQosPolicyId'] = setQosPolicyId;
  if(addQosPolicyId != null && addQosPolicyId !== '')
    vals['addQosPolicyId'] = addQosPolicyId;
  var removeQosPolicyId = $formValues.querySelector('.removeQosPolicyId')?.value;
  if(removeQosPolicyId != null && removeQosPolicyId !== '')
    vals['removeQosPolicyId'] = removeQosPolicyId;

  var valueRevisionNumber = $formValues.querySelector('.valueRevisionNumber')?.value;
  var removeRevisionNumber = $formValues.querySelector('.removeRevisionNumber')?.value === 'true';
  var setRevisionNumber = removeRevisionNumber ? null : $formValues.querySelector('.setRevisionNumber')?.value;
  var addRevisionNumber = $formValues.querySelector('.addRevisionNumber')?.value;
  if(removeRevisionNumber || setRevisionNumber != null && setRevisionNumber !== '')
    vals['setRevisionNumber'] = setRevisionNumber;
  if(addRevisionNumber != null && addRevisionNumber !== '')
    vals['addRevisionNumber'] = addRevisionNumber;
  var removeRevisionNumber = $formValues.querySelector('.removeRevisionNumber')?.value;
  if(removeRevisionNumber != null && removeRevisionNumber !== '')
    vals['removeRevisionNumber'] = removeRevisionNumber;

  var valueStatus = $formValues.querySelector('.valueStatus')?.value;
  var removeStatus = $formValues.querySelector('.removeStatus')?.value === 'true';
  var setStatus = removeStatus ? null : $formValues.querySelector('.setStatus')?.value;
  var addStatus = $formValues.querySelector('.addStatus')?.value;
  if(removeStatus || setStatus != null && setStatus !== '')
    vals['setStatus'] = setStatus;
  if(addStatus != null && addStatus !== '')
    vals['addStatus'] = addStatus;
  var removeStatus = $formValues.querySelector('.removeStatus')?.value;
  if(removeStatus != null && removeStatus !== '')
    vals['removeStatus'] = removeStatus;

  var valueSubnetIds = $formValues.querySelector('.valueSubnetIds')?.value;
  var removeSubnetIds = $formValues.querySelector('.removeSubnetIds')?.value === 'true';
  var setSubnetIds = removeSubnetIds ? null : $formValues.querySelector('.setSubnetIds')?.value;
  var addSubnetIds = $formValues.querySelector('.addSubnetIds')?.value;
  if(removeSubnetIds || setSubnetIds != null && setSubnetIds !== '')
    vals['setSubnetIds'] = JSON.parse(setSubnetIds);
  if(addSubnetIds != null && addSubnetIds !== '')
    vals['addSubnetIds'] = addSubnetIds;
  var removeSubnetIds = $formValues.querySelector('.removeSubnetIds')?.value;
  if(removeSubnetIds != null && removeSubnetIds !== '')
    vals['removeSubnetIds'] = removeSubnetIds;

  var valueTags = $formValues.querySelector('.valueTags')?.value;
  var removeTags = $formValues.querySelector('.removeTags')?.value === 'true';
  var setTags = removeTags ? null : $formValues.querySelector('.setTags')?.value;
  var addTags = $formValues.querySelector('.addTags')?.value;
  if(removeTags || setTags != null && setTags !== '')
    vals['setTags'] = JSON.parse(setTags);
  if(addTags != null && addTags !== '')
    vals['addTags'] = addTags;
  var removeTags = $formValues.querySelector('.removeTags')?.value;
  if(removeTags != null && removeTags !== '')
    vals['removeTags'] = removeTags;

  var valueTenantId = $formValues.querySelector('.valueTenantId')?.value;
  var removeTenantId = $formValues.querySelector('.removeTenantId')?.value === 'true';
  var setTenantId = removeTenantId ? null : $formValues.querySelector('.setTenantId')?.value;
  var addTenantId = $formValues.querySelector('.addTenantId')?.value;
  if(removeTenantId || setTenantId != null && setTenantId !== '')
    vals['setTenantId'] = setTenantId;
  if(addTenantId != null && addTenantId !== '')
    vals['addTenantId'] = addTenantId;
  var removeTenantId = $formValues.querySelector('.removeTenantId')?.value;
  if(removeTenantId != null && removeTenantId !== '')
    vals['removeTenantId'] = removeTenantId;

  var valueUpdatedAt = $formValues.querySelector('.valueUpdatedAt')?.value;
  var removeUpdatedAt = $formValues.querySelector('.removeUpdatedAt')?.value === 'true';
  var setUpdatedAt = removeUpdatedAt ? null : $formValues.querySelector('.setUpdatedAt')?.value;
  var addUpdatedAt = $formValues.querySelector('.addUpdatedAt')?.value;
  if(removeUpdatedAt || setUpdatedAt != null && setUpdatedAt !== '')
    vals['setUpdatedAt'] = setUpdatedAt;
  if(addUpdatedAt != null && addUpdatedAt !== '')
    vals['addUpdatedAt'] = addUpdatedAt;
  var removeUpdatedAt = $formValues.querySelector('.removeUpdatedAt')?.value;
  if(removeUpdatedAt != null && removeUpdatedAt !== '')
    vals['removeUpdatedAt'] = removeUpdatedAt;

  var valueIsAdminStateUp = $formValues.querySelector('.valueIsAdminStateUp')?.value;
  var removeIsAdminStateUp = $formValues.querySelector('.removeIsAdminStateUp')?.value === 'true';
  if(valueIsAdminStateUp != null)
    valueIsAdminStateUp = valueIsAdminStateUp === 'true';
  var valueIsAdminStateUpSelectVal = $formValues.querySelector('select.setIsAdminStateUp')?.value;
  if(valueIsAdminStateUpSelectVal != null)
    valueIsAdminStateUpSelectVal = valueIsAdminStateUpSelectVal === 'true';
  if(valueIsAdminStateUpSelectVal != null && valueIsAdminStateUpSelectVal !== '')
    valueIsAdminStateUp = valueIsAdminStateUpSelectVal == 'true';
  var setIsAdminStateUp = removeIsAdminStateUp ? null : valueIsAdminStateUp;
  var addIsAdminStateUp = $formValues.querySelector('.addIsAdminStateUp')?.checked;
  if(removeIsAdminStateUp || setIsAdminStateUp != null && setIsAdminStateUp !== '')
    vals['setIsAdminStateUp'] = setIsAdminStateUp;
  if(addIsAdminStateUp != null && addIsAdminStateUp !== '')
    vals['addIsAdminStateUp'] = addIsAdminStateUp;
  var removeIsAdminStateUp = $formValues.querySelector('.removeIsAdminStateUp')?.checked;
  if(removeIsAdminStateUp != null && removeIsAdminStateUp !== '')
    vals['removeIsAdminStateUp'] = removeIsAdminStateUp;

  var valueIsDefault = $formValues.querySelector('.valueIsDefault')?.value;
  var removeIsDefault = $formValues.querySelector('.removeIsDefault')?.value === 'true';
  if(valueIsDefault != null)
    valueIsDefault = valueIsDefault === 'true';
  var valueIsDefaultSelectVal = $formValues.querySelector('select.setIsDefault')?.value;
  if(valueIsDefaultSelectVal != null)
    valueIsDefaultSelectVal = valueIsDefaultSelectVal === 'true';
  if(valueIsDefaultSelectVal != null && valueIsDefaultSelectVal !== '')
    valueIsDefault = valueIsDefaultSelectVal == 'true';
  var setIsDefault = removeIsDefault ? null : valueIsDefault;
  var addIsDefault = $formValues.querySelector('.addIsDefault')?.checked;
  if(removeIsDefault || setIsDefault != null && setIsDefault !== '')
    vals['setIsDefault'] = setIsDefault;
  if(addIsDefault != null && addIsDefault !== '')
    vals['addIsDefault'] = addIsDefault;
  var removeIsDefault = $formValues.querySelector('.removeIsDefault')?.checked;
  if(removeIsDefault != null && removeIsDefault !== '')
    vals['removeIsDefault'] = removeIsDefault;

  var valueIsPortSecurityEnabled = $formValues.querySelector('.valueIsPortSecurityEnabled')?.value;
  var removeIsPortSecurityEnabled = $formValues.querySelector('.removeIsPortSecurityEnabled')?.value === 'true';
  if(valueIsPortSecurityEnabled != null)
    valueIsPortSecurityEnabled = valueIsPortSecurityEnabled === 'true';
  var valueIsPortSecurityEnabledSelectVal = $formValues.querySelector('select.setIsPortSecurityEnabled')?.value;
  if(valueIsPortSecurityEnabledSelectVal != null)
    valueIsPortSecurityEnabledSelectVal = valueIsPortSecurityEnabledSelectVal === 'true';
  if(valueIsPortSecurityEnabledSelectVal != null && valueIsPortSecurityEnabledSelectVal !== '')
    valueIsPortSecurityEnabled = valueIsPortSecurityEnabledSelectVal == 'true';
  var setIsPortSecurityEnabled = removeIsPortSecurityEnabled ? null : valueIsPortSecurityEnabled;
  var addIsPortSecurityEnabled = $formValues.querySelector('.addIsPortSecurityEnabled')?.checked;
  if(removeIsPortSecurityEnabled || setIsPortSecurityEnabled != null && setIsPortSecurityEnabled !== '')
    vals['setIsPortSecurityEnabled'] = setIsPortSecurityEnabled;
  if(addIsPortSecurityEnabled != null && addIsPortSecurityEnabled !== '')
    vals['addIsPortSecurityEnabled'] = addIsPortSecurityEnabled;
  var removeIsPortSecurityEnabled = $formValues.querySelector('.removeIsPortSecurityEnabled')?.checked;
  if(removeIsPortSecurityEnabled != null && removeIsPortSecurityEnabled !== '')
    vals['removeIsPortSecurityEnabled'] = removeIsPortSecurityEnabled;

  var valueIsRouterExternal = $formValues.querySelector('.valueIsRouterExternal')?.value;
  var removeIsRouterExternal = $formValues.querySelector('.removeIsRouterExternal')?.value === 'true';
  if(valueIsRouterExternal != null)
    valueIsRouterExternal = valueIsRouterExternal === 'true';
  var valueIsRouterExternalSelectVal = $formValues.querySelector('select.setIsRouterExternal')?.value;
  if(valueIsRouterExternalSelectVal != null)
    valueIsRouterExternalSelectVal = valueIsRouterExternalSelectVal === 'true';
  if(valueIsRouterExternalSelectVal != null && valueIsRouterExternalSelectVal !== '')
    valueIsRouterExternal = valueIsRouterExternalSelectVal == 'true';
  var setIsRouterExternal = removeIsRouterExternal ? null : valueIsRouterExternal;
  var addIsRouterExternal = $formValues.querySelector('.addIsRouterExternal')?.checked;
  if(removeIsRouterExternal || setIsRouterExternal != null && setIsRouterExternal !== '')
    vals['setIsRouterExternal'] = setIsRouterExternal;
  if(addIsRouterExternal != null && addIsRouterExternal !== '')
    vals['addIsRouterExternal'] = addIsRouterExternal;
  var removeIsRouterExternal = $formValues.querySelector('.removeIsRouterExternal')?.checked;
  if(removeIsRouterExternal != null && removeIsRouterExternal !== '')
    vals['removeIsRouterExternal'] = removeIsRouterExternal;

  var valueIsShared = $formValues.querySelector('.valueIsShared')?.value;
  var removeIsShared = $formValues.querySelector('.removeIsShared')?.value === 'true';
  if(valueIsShared != null)
    valueIsShared = valueIsShared === 'true';
  var valueIsSharedSelectVal = $formValues.querySelector('select.setIsShared')?.value;
  if(valueIsSharedSelectVal != null)
    valueIsSharedSelectVal = valueIsSharedSelectVal === 'true';
  if(valueIsSharedSelectVal != null && valueIsSharedSelectVal !== '')
    valueIsShared = valueIsSharedSelectVal == 'true';
  var setIsShared = removeIsShared ? null : valueIsShared;
  var addIsShared = $formValues.querySelector('.addIsShared')?.checked;
  if(removeIsShared || setIsShared != null && setIsShared !== '')
    vals['setIsShared'] = setIsShared;
  if(addIsShared != null && addIsShared !== '')
    vals['addIsShared'] = addIsShared;
  var removeIsShared = $formValues.querySelector('.removeIsShared')?.checked;
  if(removeIsShared != null && removeIsShared !== '')
    vals['removeIsShared'] = removeIsShared;

  var valueIsVlanQueing = $formValues.querySelector('.valueIsVlanQueing')?.value;
  var removeIsVlanQueing = $formValues.querySelector('.removeIsVlanQueing')?.value === 'true';
  if(valueIsVlanQueing != null)
    valueIsVlanQueing = valueIsVlanQueing === 'true';
  var valueIsVlanQueingSelectVal = $formValues.querySelector('select.setIsVlanQueing')?.value;
  if(valueIsVlanQueingSelectVal != null)
    valueIsVlanQueingSelectVal = valueIsVlanQueingSelectVal === 'true';
  if(valueIsVlanQueingSelectVal != null && valueIsVlanQueingSelectVal !== '')
    valueIsVlanQueing = valueIsVlanQueingSelectVal == 'true';
  var setIsVlanQueing = removeIsVlanQueing ? null : valueIsVlanQueing;
  var addIsVlanQueing = $formValues.querySelector('.addIsVlanQueing')?.checked;
  if(removeIsVlanQueing || setIsVlanQueing != null && setIsVlanQueing !== '')
    vals['setIsVlanQueing'] = setIsVlanQueing;
  if(addIsVlanQueing != null && addIsVlanQueing !== '')
    vals['addIsVlanQueing'] = addIsVlanQueing;
  var removeIsVlanQueing = $formValues.querySelector('.removeIsVlanQueing')?.checked;
  if(removeIsVlanQueing != null && removeIsVlanQueing !== '')
    vals['removeIsVlanQueing'] = removeIsVlanQueing;

  var valueIsVlanTransparent = $formValues.querySelector('.valueIsVlanTransparent')?.value;
  var removeIsVlanTransparent = $formValues.querySelector('.removeIsVlanTransparent')?.value === 'true';
  if(valueIsVlanTransparent != null)
    valueIsVlanTransparent = valueIsVlanTransparent === 'true';
  var valueIsVlanTransparentSelectVal = $formValues.querySelector('select.setIsVlanTransparent')?.value;
  if(valueIsVlanTransparentSelectVal != null)
    valueIsVlanTransparentSelectVal = valueIsVlanTransparentSelectVal === 'true';
  if(valueIsVlanTransparentSelectVal != null && valueIsVlanTransparentSelectVal !== '')
    valueIsVlanTransparent = valueIsVlanTransparentSelectVal == 'true';
  var setIsVlanTransparent = removeIsVlanTransparent ? null : valueIsVlanTransparent;
  var addIsVlanTransparent = $formValues.querySelector('.addIsVlanTransparent')?.checked;
  if(removeIsVlanTransparent || setIsVlanTransparent != null && setIsVlanTransparent !== '')
    vals['setIsVlanTransparent'] = setIsVlanTransparent;
  if(addIsVlanTransparent != null && addIsVlanTransparent !== '')
    vals['addIsVlanTransparent'] = addIsVlanTransparent;
  var removeIsVlanTransparent = $formValues.querySelector('.removeIsVlanTransparent')?.checked;
  if(removeIsVlanTransparent != null && removeIsVlanTransparent !== '')
    vals['removeIsVlanTransparent'] = removeIsVlanTransparent;

  var valueL2Adjacency = $formValues.querySelector('.valueL2Adjacency')?.value;
  var removeL2Adjacency = $formValues.querySelector('.removeL2Adjacency')?.value === 'true';
  if(valueL2Adjacency != null)
    valueL2Adjacency = valueL2Adjacency === 'true';
  var valueL2AdjacencySelectVal = $formValues.querySelector('select.setL2Adjacency')?.value;
  if(valueL2AdjacencySelectVal != null)
    valueL2AdjacencySelectVal = valueL2AdjacencySelectVal === 'true';
  if(valueL2AdjacencySelectVal != null && valueL2AdjacencySelectVal !== '')
    valueL2Adjacency = valueL2AdjacencySelectVal == 'true';
  var setL2Adjacency = removeL2Adjacency ? null : valueL2Adjacency;
  var addL2Adjacency = $formValues.querySelector('.addL2Adjacency')?.checked;
  if(removeL2Adjacency || setL2Adjacency != null && setL2Adjacency !== '')
    vals['setL2Adjacency'] = setL2Adjacency;
  if(addL2Adjacency != null && addL2Adjacency !== '')
    vals['addL2Adjacency'] = addL2Adjacency;
  var removeL2Adjacency = $formValues.querySelector('.removeL2Adjacency')?.checked;
  if(removeL2Adjacency != null && removeL2Adjacency !== '')
    vals['removeL2Adjacency'] = removeL2Adjacency;

  var valueLocationCloud = $formValues.querySelector('.valueLocationCloud')?.value;
  var removeLocationCloud = $formValues.querySelector('.removeLocationCloud')?.value === 'true';
  var setLocationCloud = removeLocationCloud ? null : $formValues.querySelector('.setLocationCloud')?.value;
  var addLocationCloud = $formValues.querySelector('.addLocationCloud')?.value;
  if(removeLocationCloud || setLocationCloud != null && setLocationCloud !== '')
    vals['setLocationCloud'] = setLocationCloud;
  if(addLocationCloud != null && addLocationCloud !== '')
    vals['addLocationCloud'] = addLocationCloud;
  var removeLocationCloud = $formValues.querySelector('.removeLocationCloud')?.value;
  if(removeLocationCloud != null && removeLocationCloud !== '')
    vals['removeLocationCloud'] = removeLocationCloud;

  var valueLocationProjectDomainId = $formValues.querySelector('.valueLocationProjectDomainId')?.value;
  var removeLocationProjectDomainId = $formValues.querySelector('.removeLocationProjectDomainId')?.value === 'true';
  var setLocationProjectDomainId = removeLocationProjectDomainId ? null : $formValues.querySelector('.setLocationProjectDomainId')?.value;
  var addLocationProjectDomainId = $formValues.querySelector('.addLocationProjectDomainId')?.value;
  if(removeLocationProjectDomainId || setLocationProjectDomainId != null && setLocationProjectDomainId !== '')
    vals['setLocationProjectDomainId'] = setLocationProjectDomainId;
  if(addLocationProjectDomainId != null && addLocationProjectDomainId !== '')
    vals['addLocationProjectDomainId'] = addLocationProjectDomainId;
  var removeLocationProjectDomainId = $formValues.querySelector('.removeLocationProjectDomainId')?.value;
  if(removeLocationProjectDomainId != null && removeLocationProjectDomainId !== '')
    vals['removeLocationProjectDomainId'] = removeLocationProjectDomainId;

  var valueLocationProjectDomainName = $formValues.querySelector('.valueLocationProjectDomainName')?.value;
  var removeLocationProjectDomainName = $formValues.querySelector('.removeLocationProjectDomainName')?.value === 'true';
  var setLocationProjectDomainName = removeLocationProjectDomainName ? null : $formValues.querySelector('.setLocationProjectDomainName')?.value;
  var addLocationProjectDomainName = $formValues.querySelector('.addLocationProjectDomainName')?.value;
  if(removeLocationProjectDomainName || setLocationProjectDomainName != null && setLocationProjectDomainName !== '')
    vals['setLocationProjectDomainName'] = setLocationProjectDomainName;
  if(addLocationProjectDomainName != null && addLocationProjectDomainName !== '')
    vals['addLocationProjectDomainName'] = addLocationProjectDomainName;
  var removeLocationProjectDomainName = $formValues.querySelector('.removeLocationProjectDomainName')?.value;
  if(removeLocationProjectDomainName != null && removeLocationProjectDomainName !== '')
    vals['removeLocationProjectDomainName'] = removeLocationProjectDomainName;

  var valueLocationProjectId = $formValues.querySelector('.valueLocationProjectId')?.value;
  var removeLocationProjectId = $formValues.querySelector('.removeLocationProjectId')?.value === 'true';
  var setLocationProjectId = removeLocationProjectId ? null : $formValues.querySelector('.setLocationProjectId')?.value;
  var addLocationProjectId = $formValues.querySelector('.addLocationProjectId')?.value;
  if(removeLocationProjectId || setLocationProjectId != null && setLocationProjectId !== '')
    vals['setLocationProjectId'] = setLocationProjectId;
  if(addLocationProjectId != null && addLocationProjectId !== '')
    vals['addLocationProjectId'] = addLocationProjectId;
  var removeLocationProjectId = $formValues.querySelector('.removeLocationProjectId')?.value;
  if(removeLocationProjectId != null && removeLocationProjectId !== '')
    vals['removeLocationProjectId'] = removeLocationProjectId;

  var valueLocationProjectName = $formValues.querySelector('.valueLocationProjectName')?.value;
  var removeLocationProjectName = $formValues.querySelector('.removeLocationProjectName')?.value === 'true';
  var setLocationProjectName = removeLocationProjectName ? null : $formValues.querySelector('.setLocationProjectName')?.value;
  var addLocationProjectName = $formValues.querySelector('.addLocationProjectName')?.value;
  if(removeLocationProjectName || setLocationProjectName != null && setLocationProjectName !== '')
    vals['setLocationProjectName'] = setLocationProjectName;
  if(addLocationProjectName != null && addLocationProjectName !== '')
    vals['addLocationProjectName'] = addLocationProjectName;
  var removeLocationProjectName = $formValues.querySelector('.removeLocationProjectName')?.value;
  if(removeLocationProjectName != null && removeLocationProjectName !== '')
    vals['removeLocationProjectName'] = removeLocationProjectName;

  var valueLocationRegionName = $formValues.querySelector('.valueLocationRegionName')?.value;
  var removeLocationRegionName = $formValues.querySelector('.removeLocationRegionName')?.value === 'true';
  var setLocationRegionName = removeLocationRegionName ? null : $formValues.querySelector('.setLocationRegionName')?.value;
  var addLocationRegionName = $formValues.querySelector('.addLocationRegionName')?.value;
  if(removeLocationRegionName || setLocationRegionName != null && setLocationRegionName !== '')
    vals['setLocationRegionName'] = setLocationRegionName;
  if(addLocationRegionName != null && addLocationRegionName !== '')
    vals['addLocationRegionName'] = addLocationRegionName;
  var removeLocationRegionName = $formValues.querySelector('.removeLocationRegionName')?.value;
  if(removeLocationRegionName != null && removeLocationRegionName !== '')
    vals['removeLocationRegionName'] = removeLocationRegionName;

  var valueLocationZone = $formValues.querySelector('.valueLocationZone')?.value;
  var removeLocationZone = $formValues.querySelector('.removeLocationZone')?.value === 'true';
  var setLocationZone = removeLocationZone ? null : $formValues.querySelector('.setLocationZone')?.value;
  var addLocationZone = $formValues.querySelector('.addLocationZone')?.value;
  if(removeLocationZone || setLocationZone != null && setLocationZone !== '')
    vals['setLocationZone'] = setLocationZone;
  if(addLocationZone != null && addLocationZone !== '')
    vals['addLocationZone'] = addLocationZone;
  var removeLocationZone = $formValues.querySelector('.removeLocationZone')?.value;
  if(removeLocationZone != null && removeLocationZone !== '')
    vals['removeLocationZone'] = removeLocationZone;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value === 'true';
  var setSessionId = removeSessionId ? null : $formValues.querySelector('.setSessionId')?.value;
  var addSessionId = $formValues.querySelector('.addSessionId')?.value;
  if(removeSessionId || setSessionId != null && setSessionId !== '')
    vals['setSessionId'] = setSessionId;
  if(addSessionId != null && addSessionId !== '')
    vals['addSessionId'] = addSessionId;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value;
  if(removeSessionId != null && removeSessionId !== '')
    vals['removeSessionId'] = removeSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value === 'true';
  var setUserKey = removeUserKey ? null : $formValues.querySelector('.setUserKey')?.value;
  var addUserKey = $formValues.querySelector('.addUserKey')?.value;
  if(removeUserKey || setUserKey != null && setUserKey !== '')
    vals['setUserKey'] = setUserKey;
  if(addUserKey != null && addUserKey !== '')
    vals['addUserKey'] = addUserKey;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value;
  if(removeUserKey != null && removeUserKey !== '')
    vals['removeUserKey'] = removeUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value === 'true';
  var setObjectTitle = removeObjectTitle ? null : $formValues.querySelector('.setObjectTitle')?.value;
  var addObjectTitle = $formValues.querySelector('.addObjectTitle')?.value;
  if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
    vals['setObjectTitle'] = setObjectTitle;
  if(addObjectTitle != null && addObjectTitle !== '')
    vals['addObjectTitle'] = addObjectTitle;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value;
  if(removeObjectTitle != null && removeObjectTitle !== '')
    vals['removeObjectTitle'] = removeObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value === 'true';
  var setDisplayPage = removeDisplayPage ? null : $formValues.querySelector('.setDisplayPage')?.value;
  var addDisplayPage = $formValues.querySelector('.addDisplayPage')?.value;
  if(removeDisplayPage || setDisplayPage != null && setDisplayPage !== '')
    vals['setDisplayPage'] = setDisplayPage;
  if(addDisplayPage != null && addDisplayPage !== '')
    vals['addDisplayPage'] = addDisplayPage;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value;
  if(removeDisplayPage != null && removeDisplayPage !== '')
    vals['removeDisplayPage'] = removeDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value === 'true';
  var setEditPage = removeEditPage ? null : $formValues.querySelector('.setEditPage')?.value;
  var addEditPage = $formValues.querySelector('.addEditPage')?.value;
  if(removeEditPage || setEditPage != null && setEditPage !== '')
    vals['setEditPage'] = setEditPage;
  if(addEditPage != null && addEditPage !== '')
    vals['addEditPage'] = addEditPage;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value;
  if(removeEditPage != null && removeEditPage !== '')
    vals['removeEditPage'] = removeEditPage;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value === 'true';
  var setUserPage = removeUserPage ? null : $formValues.querySelector('.setUserPage')?.value;
  var addUserPage = $formValues.querySelector('.addUserPage')?.value;
  if(removeUserPage || setUserPage != null && setUserPage !== '')
    vals['setUserPage'] = setUserPage;
  if(addUserPage != null && addUserPage !== '')
    vals['addUserPage'] = addUserPage;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value;
  if(removeUserPage != null && removeUserPage !== '')
    vals['removeUserPage'] = removeUserPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value === 'true';
  var setDownload = removeDownload ? null : $formValues.querySelector('.setDownload')?.value;
  var addDownload = $formValues.querySelector('.addDownload')?.value;
  if(removeDownload || setDownload != null && setDownload !== '')
    vals['setDownload'] = setDownload;
  if(addDownload != null && addDownload !== '')
    vals['addDownload'] = addDownload;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value;
  if(removeDownload != null && removeDownload !== '')
    vals['removeDownload'] = removeDownload;

  patchBareMetalNetworkVals(id == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'id:' + id}], vals, target, success, error);
}

function patchBareMetalNetworkFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterAvailabilityZoneHints = $formFilters.querySelector('.valueAvailabilityZoneHints')?.value;
    if(filterAvailabilityZoneHints != null && filterAvailabilityZoneHints !== '')
      filters.push({ name: 'fq', value: 'availabilityZoneHints:' + filterAvailabilityZoneHints });

    var filterAvailabilityZones = $formFilters.querySelector('.valueAvailabilityZones')?.value;
    if(filterAvailabilityZones != null && filterAvailabilityZones !== '')
      filters.push({ name: 'fq', value: 'availabilityZones:' + filterAvailabilityZones });

    var filterCreatedAt = $formFilters.querySelector('.valueCreatedAt')?.value;
    if(filterCreatedAt != null && filterCreatedAt !== '')
      filters.push({ name: 'fq', value: 'createdAt:' + filterCreatedAt });

    var filterDnsDomain = $formFilters.querySelector('.valueDnsDomain')?.value;
    if(filterDnsDomain != null && filterDnsDomain !== '')
      filters.push({ name: 'fq', value: 'dnsDomain:' + filterDnsDomain });

    var filterMtu = $formFilters.querySelector('.valueMtu')?.value;
    if(filterMtu != null && filterMtu !== '')
      filters.push({ name: 'fq', value: 'mtu:' + filterMtu });

    var filterProjectId = $formFilters.querySelector('.valueProjectId')?.value;
    if(filterProjectId != null && filterProjectId !== '')
      filters.push({ name: 'fq', value: 'projectId:' + filterProjectId });

    var filterProviderNetworkType = $formFilters.querySelector('.valueProviderNetworkType')?.value;
    if(filterProviderNetworkType != null && filterProviderNetworkType !== '')
      filters.push({ name: 'fq', value: 'providerNetworkType:' + filterProviderNetworkType });

    var filterProviderPhysicalNetwork = $formFilters.querySelector('.valueProviderPhysicalNetwork')?.value;
    if(filterProviderPhysicalNetwork != null && filterProviderPhysicalNetwork !== '')
      filters.push({ name: 'fq', value: 'providerPhysicalNetwork:' + filterProviderPhysicalNetwork });

    var filterProviderSegmentationId = $formFilters.querySelector('.valueProviderSegmentationId')?.value;
    if(filterProviderSegmentationId != null && filterProviderSegmentationId !== '')
      filters.push({ name: 'fq', value: 'providerSegmentationId:' + filterProviderSegmentationId });

    var filterQosPolicyId = $formFilters.querySelector('.valueQosPolicyId')?.value;
    if(filterQosPolicyId != null && filterQosPolicyId !== '')
      filters.push({ name: 'fq', value: 'qosPolicyId:' + filterQosPolicyId });

    var filterRevisionNumber = $formFilters.querySelector('.valueRevisionNumber')?.value;
    if(filterRevisionNumber != null && filterRevisionNumber !== '')
      filters.push({ name: 'fq', value: 'revisionNumber:' + filterRevisionNumber });

    var filterStatus = $formFilters.querySelector('.valueStatus')?.value;
    if(filterStatus != null && filterStatus !== '')
      filters.push({ name: 'fq', value: 'status:' + filterStatus });

    var filterSubnetIds = $formFilters.querySelector('.valueSubnetIds')?.value;
    if(filterSubnetIds != null && filterSubnetIds !== '')
      filters.push({ name: 'fq', value: 'subnetIds:' + filterSubnetIds });

    var filterTags = $formFilters.querySelector('.valueTags')?.value;
    if(filterTags != null && filterTags !== '')
      filters.push({ name: 'fq', value: 'tags:' + filterTags });

    var filterTenantId = $formFilters.querySelector('.valueTenantId')?.value;
    if(filterTenantId != null && filterTenantId !== '')
      filters.push({ name: 'fq', value: 'tenantId:' + filterTenantId });

    var filterUpdatedAt = $formFilters.querySelector('.valueUpdatedAt')?.value;
    if(filterUpdatedAt != null && filterUpdatedAt !== '')
      filters.push({ name: 'fq', value: 'updatedAt:' + filterUpdatedAt });

    var $filterIsAdminStateUpCheckbox = $formFilters.querySelector('input.valueIsAdminStateUp[type = "checkbox"]');
    var $filterIsAdminStateUpSelect = $formFilters.querySelector('select.valueIsAdminStateUp');
    var filterIsAdminStateUp = $filterIsAdminStateUpSelect.length ? $filterIsAdminStateUpSelect.value : $filterIsAdminStateUpCheckbox.checked;
    var filterIsAdminStateUpSelectVal = $formFilters.querySelector('select.filterIsAdminStateUp')?.value;
    var filterIsAdminStateUp = null;
    if(filterIsAdminStateUpSelectVal !== '')
      filterIsAdminStateUp = filterIsAdminStateUpSelectVal == 'true';
    if(filterIsAdminStateUp != null && filterIsAdminStateUp === true)
      filters.push({ name: 'fq', value: 'isAdminStateUp:' + filterIsAdminStateUp });

    var $filterIsDefaultCheckbox = $formFilters.querySelector('input.valueIsDefault[type = "checkbox"]');
    var $filterIsDefaultSelect = $formFilters.querySelector('select.valueIsDefault');
    var filterIsDefault = $filterIsDefaultSelect.length ? $filterIsDefaultSelect.value : $filterIsDefaultCheckbox.checked;
    var filterIsDefaultSelectVal = $formFilters.querySelector('select.filterIsDefault')?.value;
    var filterIsDefault = null;
    if(filterIsDefaultSelectVal !== '')
      filterIsDefault = filterIsDefaultSelectVal == 'true';
    if(filterIsDefault != null && filterIsDefault === true)
      filters.push({ name: 'fq', value: 'isDefault:' + filterIsDefault });

    var $filterIsPortSecurityEnabledCheckbox = $formFilters.querySelector('input.valueIsPortSecurityEnabled[type = "checkbox"]');
    var $filterIsPortSecurityEnabledSelect = $formFilters.querySelector('select.valueIsPortSecurityEnabled');
    var filterIsPortSecurityEnabled = $filterIsPortSecurityEnabledSelect.length ? $filterIsPortSecurityEnabledSelect.value : $filterIsPortSecurityEnabledCheckbox.checked;
    var filterIsPortSecurityEnabledSelectVal = $formFilters.querySelector('select.filterIsPortSecurityEnabled')?.value;
    var filterIsPortSecurityEnabled = null;
    if(filterIsPortSecurityEnabledSelectVal !== '')
      filterIsPortSecurityEnabled = filterIsPortSecurityEnabledSelectVal == 'true';
    if(filterIsPortSecurityEnabled != null && filterIsPortSecurityEnabled === true)
      filters.push({ name: 'fq', value: 'isPortSecurityEnabled:' + filterIsPortSecurityEnabled });

    var $filterIsRouterExternalCheckbox = $formFilters.querySelector('input.valueIsRouterExternal[type = "checkbox"]');
    var $filterIsRouterExternalSelect = $formFilters.querySelector('select.valueIsRouterExternal');
    var filterIsRouterExternal = $filterIsRouterExternalSelect.length ? $filterIsRouterExternalSelect.value : $filterIsRouterExternalCheckbox.checked;
    var filterIsRouterExternalSelectVal = $formFilters.querySelector('select.filterIsRouterExternal')?.value;
    var filterIsRouterExternal = null;
    if(filterIsRouterExternalSelectVal !== '')
      filterIsRouterExternal = filterIsRouterExternalSelectVal == 'true';
    if(filterIsRouterExternal != null && filterIsRouterExternal === true)
      filters.push({ name: 'fq', value: 'isRouterExternal:' + filterIsRouterExternal });

    var $filterIsSharedCheckbox = $formFilters.querySelector('input.valueIsShared[type = "checkbox"]');
    var $filterIsSharedSelect = $formFilters.querySelector('select.valueIsShared');
    var filterIsShared = $filterIsSharedSelect.length ? $filterIsSharedSelect.value : $filterIsSharedCheckbox.checked;
    var filterIsSharedSelectVal = $formFilters.querySelector('select.filterIsShared')?.value;
    var filterIsShared = null;
    if(filterIsSharedSelectVal !== '')
      filterIsShared = filterIsSharedSelectVal == 'true';
    if(filterIsShared != null && filterIsShared === true)
      filters.push({ name: 'fq', value: 'isShared:' + filterIsShared });

    var $filterIsVlanQueingCheckbox = $formFilters.querySelector('input.valueIsVlanQueing[type = "checkbox"]');
    var $filterIsVlanQueingSelect = $formFilters.querySelector('select.valueIsVlanQueing');
    var filterIsVlanQueing = $filterIsVlanQueingSelect.length ? $filterIsVlanQueingSelect.value : $filterIsVlanQueingCheckbox.checked;
    var filterIsVlanQueingSelectVal = $formFilters.querySelector('select.filterIsVlanQueing')?.value;
    var filterIsVlanQueing = null;
    if(filterIsVlanQueingSelectVal !== '')
      filterIsVlanQueing = filterIsVlanQueingSelectVal == 'true';
    if(filterIsVlanQueing != null && filterIsVlanQueing === true)
      filters.push({ name: 'fq', value: 'isVlanQueing:' + filterIsVlanQueing });

    var $filterIsVlanTransparentCheckbox = $formFilters.querySelector('input.valueIsVlanTransparent[type = "checkbox"]');
    var $filterIsVlanTransparentSelect = $formFilters.querySelector('select.valueIsVlanTransparent');
    var filterIsVlanTransparent = $filterIsVlanTransparentSelect.length ? $filterIsVlanTransparentSelect.value : $filterIsVlanTransparentCheckbox.checked;
    var filterIsVlanTransparentSelectVal = $formFilters.querySelector('select.filterIsVlanTransparent')?.value;
    var filterIsVlanTransparent = null;
    if(filterIsVlanTransparentSelectVal !== '')
      filterIsVlanTransparent = filterIsVlanTransparentSelectVal == 'true';
    if(filterIsVlanTransparent != null && filterIsVlanTransparent === true)
      filters.push({ name: 'fq', value: 'isVlanTransparent:' + filterIsVlanTransparent });

    var $filterL2AdjacencyCheckbox = $formFilters.querySelector('input.valueL2Adjacency[type = "checkbox"]');
    var $filterL2AdjacencySelect = $formFilters.querySelector('select.valueL2Adjacency');
    var filterL2Adjacency = $filterL2AdjacencySelect.length ? $filterL2AdjacencySelect.value : $filterL2AdjacencyCheckbox.checked;
    var filterL2AdjacencySelectVal = $formFilters.querySelector('select.filterL2Adjacency')?.value;
    var filterL2Adjacency = null;
    if(filterL2AdjacencySelectVal !== '')
      filterL2Adjacency = filterL2AdjacencySelectVal == 'true';
    if(filterL2Adjacency != null && filterL2Adjacency === true)
      filters.push({ name: 'fq', value: 'l2Adjacency:' + filterL2Adjacency });

    var filterLocationCloud = $formFilters.querySelector('.valueLocationCloud')?.value;
    if(filterLocationCloud != null && filterLocationCloud !== '')
      filters.push({ name: 'fq', value: 'locationCloud:' + filterLocationCloud });

    var filterLocationProjectDomainId = $formFilters.querySelector('.valueLocationProjectDomainId')?.value;
    if(filterLocationProjectDomainId != null && filterLocationProjectDomainId !== '')
      filters.push({ name: 'fq', value: 'locationProjectDomainId:' + filterLocationProjectDomainId });

    var filterLocationProjectDomainName = $formFilters.querySelector('.valueLocationProjectDomainName')?.value;
    if(filterLocationProjectDomainName != null && filterLocationProjectDomainName !== '')
      filters.push({ name: 'fq', value: 'locationProjectDomainName:' + filterLocationProjectDomainName });

    var filterLocationProjectId = $formFilters.querySelector('.valueLocationProjectId')?.value;
    if(filterLocationProjectId != null && filterLocationProjectId !== '')
      filters.push({ name: 'fq', value: 'locationProjectId:' + filterLocationProjectId });

    var filterLocationProjectName = $formFilters.querySelector('.valueLocationProjectName')?.value;
    if(filterLocationProjectName != null && filterLocationProjectName !== '')
      filters.push({ name: 'fq', value: 'locationProjectName:' + filterLocationProjectName });

    var filterLocationRegionName = $formFilters.querySelector('.valueLocationRegionName')?.value;
    if(filterLocationRegionName != null && filterLocationRegionName !== '')
      filters.push({ name: 'fq', value: 'locationRegionName:' + filterLocationRegionName });

    var filterLocationZone = $formFilters.querySelector('.valueLocationZone')?.value;
    if(filterLocationZone != null && filterLocationZone !== '')
      filters.push({ name: 'fq', value: 'locationZone:' + filterLocationZone });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });
  }
  return filters;
}

function patchBareMetalNetworkVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchBareMetalNetworkVals(filters, vals, target, success, error);
}

function patchBareMetalNetworkVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/bare-metal-network?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PATCH'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// POST //

async function postBareMetalNetwork($formValues, target, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      addError(target, jqXhr);
    };
  }

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  if(valuePk != null && valuePk !== '')
    vals['pk'] = valuePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueId = $formValues.querySelector('.valueId')?.value;
  if(valueId != null && valueId !== '')
    vals['id'] = valueId;

  var valueName = $formValues.querySelector('.valueName')?.value;
  if(valueName != null && valueName !== '')
    vals['name'] = valueName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueAvailabilityZoneHints = $formValues.querySelector('.valueAvailabilityZoneHints')?.value;
  if(valueAvailabilityZoneHints != null && valueAvailabilityZoneHints !== '')
    vals['availabilityZoneHints'] = JSON.parse(valueAvailabilityZoneHints);

  var valueAvailabilityZones = $formValues.querySelector('.valueAvailabilityZones')?.value;
  if(valueAvailabilityZones != null && valueAvailabilityZones !== '')
    vals['availabilityZones'] = JSON.parse(valueAvailabilityZones);

  var valueCreatedAt = $formValues.querySelector('.valueCreatedAt')?.value;
  if(valueCreatedAt != null && valueCreatedAt !== '')
    vals['createdAt'] = valueCreatedAt;

  var valueDnsDomain = $formValues.querySelector('.valueDnsDomain')?.value;
  if(valueDnsDomain != null && valueDnsDomain !== '')
    vals['dnsDomain'] = valueDnsDomain;

  var valueMtu = $formValues.querySelector('.valueMtu')?.value;
  if(valueMtu != null && valueMtu !== '')
    vals['mtu'] = valueMtu;

  var valueProjectId = $formValues.querySelector('.valueProjectId')?.value;
  if(valueProjectId != null && valueProjectId !== '')
    vals['projectId'] = valueProjectId;

  var valueProviderNetworkType = $formValues.querySelector('.valueProviderNetworkType')?.value;
  if(valueProviderNetworkType != null && valueProviderNetworkType !== '')
    vals['providerNetworkType'] = valueProviderNetworkType;

  var valueProviderPhysicalNetwork = $formValues.querySelector('.valueProviderPhysicalNetwork')?.value;
  if(valueProviderPhysicalNetwork != null && valueProviderPhysicalNetwork !== '')
    vals['providerPhysicalNetwork'] = valueProviderPhysicalNetwork;

  var valueProviderSegmentationId = $formValues.querySelector('.valueProviderSegmentationId')?.value;
  if(valueProviderSegmentationId != null && valueProviderSegmentationId !== '')
    vals['providerSegmentationId'] = valueProviderSegmentationId;

  var valueQosPolicyId = $formValues.querySelector('.valueQosPolicyId')?.value;
  if(valueQosPolicyId != null && valueQosPolicyId !== '')
    vals['qosPolicyId'] = valueQosPolicyId;

  var valueRevisionNumber = $formValues.querySelector('.valueRevisionNumber')?.value;
  if(valueRevisionNumber != null && valueRevisionNumber !== '')
    vals['revisionNumber'] = valueRevisionNumber;

  var valueStatus = $formValues.querySelector('.valueStatus')?.value;
  if(valueStatus != null && valueStatus !== '')
    vals['status'] = valueStatus;

  var valueSubnetIds = $formValues.querySelector('.valueSubnetIds')?.value;
  if(valueSubnetIds != null && valueSubnetIds !== '')
    vals['subnetIds'] = JSON.parse(valueSubnetIds);

  var valueTags = $formValues.querySelector('.valueTags')?.value;
  if(valueTags != null && valueTags !== '')
    vals['tags'] = JSON.parse(valueTags);

  var valueTenantId = $formValues.querySelector('.valueTenantId')?.value;
  if(valueTenantId != null && valueTenantId !== '')
    vals['tenantId'] = valueTenantId;

  var valueUpdatedAt = $formValues.querySelector('.valueUpdatedAt')?.value;
  if(valueUpdatedAt != null && valueUpdatedAt !== '')
    vals['updatedAt'] = valueUpdatedAt;

  var valueIsAdminStateUp = $formValues.querySelector('.valueIsAdminStateUp')?.value;
  if(valueIsAdminStateUp != null && valueIsAdminStateUp !== '')
    vals['isAdminStateUp'] = valueIsAdminStateUp == 'true';

  var valueIsDefault = $formValues.querySelector('.valueIsDefault')?.value;
  if(valueIsDefault != null && valueIsDefault !== '')
    vals['isDefault'] = valueIsDefault == 'true';

  var valueIsPortSecurityEnabled = $formValues.querySelector('.valueIsPortSecurityEnabled')?.value;
  if(valueIsPortSecurityEnabled != null && valueIsPortSecurityEnabled !== '')
    vals['isPortSecurityEnabled'] = valueIsPortSecurityEnabled == 'true';

  var valueIsRouterExternal = $formValues.querySelector('.valueIsRouterExternal')?.value;
  if(valueIsRouterExternal != null && valueIsRouterExternal !== '')
    vals['isRouterExternal'] = valueIsRouterExternal == 'true';

  var valueIsShared = $formValues.querySelector('.valueIsShared')?.value;
  if(valueIsShared != null && valueIsShared !== '')
    vals['isShared'] = valueIsShared == 'true';

  var valueIsVlanQueing = $formValues.querySelector('.valueIsVlanQueing')?.value;
  if(valueIsVlanQueing != null && valueIsVlanQueing !== '')
    vals['isVlanQueing'] = valueIsVlanQueing == 'true';

  var valueIsVlanTransparent = $formValues.querySelector('.valueIsVlanTransparent')?.value;
  if(valueIsVlanTransparent != null && valueIsVlanTransparent !== '')
    vals['isVlanTransparent'] = valueIsVlanTransparent == 'true';

  var valueL2Adjacency = $formValues.querySelector('.valueL2Adjacency')?.value;
  if(valueL2Adjacency != null && valueL2Adjacency !== '')
    vals['l2Adjacency'] = valueL2Adjacency == 'true';

  var valueLocationCloud = $formValues.querySelector('.valueLocationCloud')?.value;
  if(valueLocationCloud != null && valueLocationCloud !== '')
    vals['locationCloud'] = valueLocationCloud;

  var valueLocationProjectDomainId = $formValues.querySelector('.valueLocationProjectDomainId')?.value;
  if(valueLocationProjectDomainId != null && valueLocationProjectDomainId !== '')
    vals['locationProjectDomainId'] = valueLocationProjectDomainId;

  var valueLocationProjectDomainName = $formValues.querySelector('.valueLocationProjectDomainName')?.value;
  if(valueLocationProjectDomainName != null && valueLocationProjectDomainName !== '')
    vals['locationProjectDomainName'] = valueLocationProjectDomainName;

  var valueLocationProjectId = $formValues.querySelector('.valueLocationProjectId')?.value;
  if(valueLocationProjectId != null && valueLocationProjectId !== '')
    vals['locationProjectId'] = valueLocationProjectId;

  var valueLocationProjectName = $formValues.querySelector('.valueLocationProjectName')?.value;
  if(valueLocationProjectName != null && valueLocationProjectName !== '')
    vals['locationProjectName'] = valueLocationProjectName;

  var valueLocationRegionName = $formValues.querySelector('.valueLocationRegionName')?.value;
  if(valueLocationRegionName != null && valueLocationRegionName !== '')
    vals['locationRegionName'] = valueLocationRegionName;

  var valueLocationZone = $formValues.querySelector('.valueLocationZone')?.value;
  if(valueLocationZone != null && valueLocationZone !== '')
    vals['locationZone'] = valueLocationZone;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  if(valueDisplayPage != null && valueDisplayPage !== '')
    vals['displayPage'] = valueDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  if(valueEditPage != null && valueEditPage !== '')
    vals['editPage'] = valueEditPage;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  if(valueUserPage != null && valueUserPage !== '')
    vals['userPage'] = valueUserPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  if(valueDownload != null && valueDownload !== '')
    vals['download'] = valueDownload;

  fetch(
    '/en-us/api/bare-metal-network'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function postBareMetalNetworkVals(vals, target, success, error) {
  fetch(
    '/en-us/api/bare-metal-network'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETE //

async function deleteBareMetalNetwork(target, id, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      addError(target, jqXhr);
    };
  }

  fetch(
    '/en-us/api/bare-metal-network/' + encodeURIComponent(id)
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PUTImport //

async function putimportBareMetalNetwork($formValues, target, id, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportBareMetalNetworkVals(JSON.parse(json), target, success, error);
}

function putimportBareMetalNetworkVals(json, target, success, error) {
  fetch(
    '/en-us/api/bare-metal-network-import'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PUT'
      , body: JSON.stringify(json)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETEFilter //

async function deletefilterBareMetalNetwork(target, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      addError(target, jqXhr);
    };
  }

  fetch(
    '/en-us/api/bare-metal-network'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

async function websocketBareMetalNetwork(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketBareMetalNetwork', function (error, message) {
      var json = JSON.parse(message['body']);
      var id = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + id + ' ');
      $box.setAttribute('id', 'box-' + id);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + id);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + id);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + id);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-network-wired"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify bare metal networks in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + id + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + id);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + id);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + id);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + id);
      $progress.innerText = numPATCH + '/' + numFound;
      $card.append($header);
      $header.append($i);
      $header.append($headerSpan);
      $header.append($x);
      $body.append($bar);
      $bar.append($progress);
      $card.append($body);
      $box.append($margin);
      $margin.append($card);
      if(numPATCH < numFound) {
        var $old_box = document.querySelector('.box-' + id);
      } else {
        document.querySelector('.box-' + id)?.remove();
      }
      if(id) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketBareMetalNetworkInner(apiRequest) {
  var id = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(id != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputId = null;
        var inputName = null;
        var inputDescription = null;
        var inputAvailabilityZoneHints = null;
        var inputAvailabilityZones = null;
        var inputCreatedAt = null;
        var inputDnsDomain = null;
        var inputMtu = null;
        var inputProjectId = null;
        var inputProviderNetworkType = null;
        var inputProviderPhysicalNetwork = null;
        var inputProviderSegmentationId = null;
        var inputQosPolicyId = null;
        var inputRevisionNumber = null;
        var inputStatus = null;
        var inputSubnetIds = null;
        var inputTags = null;
        var inputTenantId = null;
        var inputUpdatedAt = null;
        var inputIsAdminStateUp = null;
        var inputIsDefault = null;
        var inputIsPortSecurityEnabled = null;
        var inputIsRouterExternal = null;
        var inputIsShared = null;
        var inputIsVlanQueing = null;
        var inputIsVlanTransparent = null;
        var inputL2Adjacency = null;
        var inputLocationCloud = null;
        var inputLocationProjectDomainId = null;
        var inputLocationProjectDomainName = null;
        var inputLocationProjectId = null;
        var inputLocationProjectName = null;
        var inputLocationRegionName = null;
        var inputLocationZone = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputDisplayPage = null;
        var inputEditPage = null;
        var inputUserPage = null;
        var inputDownload = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputSolrId = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Page_archived');
        if(vars.includes('id'))
          inputId = $response.querySelector('.Page_id');
        if(vars.includes('name'))
          inputName = $response.querySelector('.Page_name');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.Page_description');
        if(vars.includes('availabilityZoneHints'))
          inputAvailabilityZoneHints = $response.querySelector('.Page_availabilityZoneHints');
        if(vars.includes('availabilityZones'))
          inputAvailabilityZones = $response.querySelector('.Page_availabilityZones');
        if(vars.includes('createdAt'))
          inputCreatedAt = $response.querySelector('.Page_createdAt');
        if(vars.includes('dnsDomain'))
          inputDnsDomain = $response.querySelector('.Page_dnsDomain');
        if(vars.includes('mtu'))
          inputMtu = $response.querySelector('.Page_mtu');
        if(vars.includes('projectId'))
          inputProjectId = $response.querySelector('.Page_projectId');
        if(vars.includes('providerNetworkType'))
          inputProviderNetworkType = $response.querySelector('.Page_providerNetworkType');
        if(vars.includes('providerPhysicalNetwork'))
          inputProviderPhysicalNetwork = $response.querySelector('.Page_providerPhysicalNetwork');
        if(vars.includes('providerSegmentationId'))
          inputProviderSegmentationId = $response.querySelector('.Page_providerSegmentationId');
        if(vars.includes('qosPolicyId'))
          inputQosPolicyId = $response.querySelector('.Page_qosPolicyId');
        if(vars.includes('revisionNumber'))
          inputRevisionNumber = $response.querySelector('.Page_revisionNumber');
        if(vars.includes('status'))
          inputStatus = $response.querySelector('.Page_status');
        if(vars.includes('subnetIds'))
          inputSubnetIds = $response.querySelector('.Page_subnetIds');
        if(vars.includes('tags'))
          inputTags = $response.querySelector('.Page_tags');
        if(vars.includes('tenantId'))
          inputTenantId = $response.querySelector('.Page_tenantId');
        if(vars.includes('updatedAt'))
          inputUpdatedAt = $response.querySelector('.Page_updatedAt');
        if(vars.includes('isAdminStateUp'))
          inputIsAdminStateUp = $response.querySelector('.Page_isAdminStateUp');
        if(vars.includes('isDefault'))
          inputIsDefault = $response.querySelector('.Page_isDefault');
        if(vars.includes('isPortSecurityEnabled'))
          inputIsPortSecurityEnabled = $response.querySelector('.Page_isPortSecurityEnabled');
        if(vars.includes('isRouterExternal'))
          inputIsRouterExternal = $response.querySelector('.Page_isRouterExternal');
        if(vars.includes('isShared'))
          inputIsShared = $response.querySelector('.Page_isShared');
        if(vars.includes('isVlanQueing'))
          inputIsVlanQueing = $response.querySelector('.Page_isVlanQueing');
        if(vars.includes('isVlanTransparent'))
          inputIsVlanTransparent = $response.querySelector('.Page_isVlanTransparent');
        if(vars.includes('l2Adjacency'))
          inputL2Adjacency = $response.querySelector('.Page_l2Adjacency');
        if(vars.includes('locationCloud'))
          inputLocationCloud = $response.querySelector('.Page_locationCloud');
        if(vars.includes('locationProjectDomainId'))
          inputLocationProjectDomainId = $response.querySelector('.Page_locationProjectDomainId');
        if(vars.includes('locationProjectDomainName'))
          inputLocationProjectDomainName = $response.querySelector('.Page_locationProjectDomainName');
        if(vars.includes('locationProjectId'))
          inputLocationProjectId = $response.querySelector('.Page_locationProjectId');
        if(vars.includes('locationProjectName'))
          inputLocationProjectName = $response.querySelector('.Page_locationProjectName');
        if(vars.includes('locationRegionName'))
          inputLocationRegionName = $response.querySelector('.Page_locationRegionName');
        if(vars.includes('locationZone'))
          inputLocationZone = $response.querySelector('.Page_locationZone');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Page_solrId');

        jsWebsocketBareMetalNetwork(id, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listBareMetalNetwork = JSON.parse($response.querySelector('.pageForm .listBareMetalNetwork')?.value);


        if(inputPk) {
          document.querySelectorAll('.Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.Page_archived'));
        }

        if(inputId) {
          document.querySelectorAll('.Page_id').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputId.getAttribute('value');
            else
              item.textContent = inputId.textContent;
          });
          addGlow(document.querySelector('.Page_id'));
        }

        if(inputName) {
          document.querySelectorAll('.Page_name').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputName.getAttribute('value');
            else
              item.textContent = inputName.textContent;
          });
          addGlow(document.querySelector('.Page_name'));
        }

        if(inputDescription) {
          document.querySelectorAll('.Page_description').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDescription.getAttribute('value');
            else
              item.textContent = inputDescription.textContent;
          });
          addGlow(document.querySelector('.Page_description'));
        }

        if(inputAvailabilityZoneHints) {
          document.querySelectorAll('.Page_availabilityZoneHints').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAvailabilityZoneHints.getAttribute('value');
            else
              item.textContent = inputAvailabilityZoneHints.textContent;
          });
          addGlow(document.querySelector('.Page_availabilityZoneHints'));
        }

        if(inputAvailabilityZones) {
          document.querySelectorAll('.Page_availabilityZones').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAvailabilityZones.getAttribute('value');
            else
              item.textContent = inputAvailabilityZones.textContent;
          });
          addGlow(document.querySelector('.Page_availabilityZones'));
        }

        if(inputCreatedAt) {
          document.querySelectorAll('.Page_createdAt').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreatedAt.getAttribute('value');
            else
              item.textContent = inputCreatedAt.textContent;
          });
          addGlow(document.querySelector('.Page_createdAt'));
        }

        if(inputDnsDomain) {
          document.querySelectorAll('.Page_dnsDomain').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDnsDomain.getAttribute('value');
            else
              item.textContent = inputDnsDomain.textContent;
          });
          addGlow(document.querySelector('.Page_dnsDomain'));
        }

        if(inputMtu) {
          document.querySelectorAll('.Page_mtu').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMtu.getAttribute('value');
            else
              item.textContent = inputMtu.textContent;
          });
          addGlow(document.querySelector('.Page_mtu'));
        }

        if(inputProjectId) {
          document.querySelectorAll('.Page_projectId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputProjectId.getAttribute('value');
            else
              item.textContent = inputProjectId.textContent;
          });
          addGlow(document.querySelector('.Page_projectId'));
        }

        if(inputProviderNetworkType) {
          document.querySelectorAll('.Page_providerNetworkType').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputProviderNetworkType.getAttribute('value');
            else
              item.textContent = inputProviderNetworkType.textContent;
          });
          addGlow(document.querySelector('.Page_providerNetworkType'));
        }

        if(inputProviderPhysicalNetwork) {
          document.querySelectorAll('.Page_providerPhysicalNetwork').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputProviderPhysicalNetwork.getAttribute('value');
            else
              item.textContent = inputProviderPhysicalNetwork.textContent;
          });
          addGlow(document.querySelector('.Page_providerPhysicalNetwork'));
        }

        if(inputProviderSegmentationId) {
          document.querySelectorAll('.Page_providerSegmentationId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputProviderSegmentationId.getAttribute('value');
            else
              item.textContent = inputProviderSegmentationId.textContent;
          });
          addGlow(document.querySelector('.Page_providerSegmentationId'));
        }

        if(inputQosPolicyId) {
          document.querySelectorAll('.Page_qosPolicyId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputQosPolicyId.getAttribute('value');
            else
              item.textContent = inputQosPolicyId.textContent;
          });
          addGlow(document.querySelector('.Page_qosPolicyId'));
        }

        if(inputRevisionNumber) {
          document.querySelectorAll('.Page_revisionNumber').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRevisionNumber.getAttribute('value');
            else
              item.textContent = inputRevisionNumber.textContent;
          });
          addGlow(document.querySelector('.Page_revisionNumber'));
        }

        if(inputStatus) {
          document.querySelectorAll('.Page_status').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputStatus.getAttribute('value');
            else
              item.textContent = inputStatus.textContent;
          });
          addGlow(document.querySelector('.Page_status'));
        }

        if(inputSubnetIds) {
          document.querySelectorAll('.Page_subnetIds').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSubnetIds.getAttribute('value');
            else
              item.textContent = inputSubnetIds.textContent;
          });
          addGlow(document.querySelector('.Page_subnetIds'));
        }

        if(inputTags) {
          document.querySelectorAll('.Page_tags').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTags.getAttribute('value');
            else
              item.textContent = inputTags.textContent;
          });
          addGlow(document.querySelector('.Page_tags'));
        }

        if(inputTenantId) {
          document.querySelectorAll('.Page_tenantId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTenantId.getAttribute('value');
            else
              item.textContent = inputTenantId.textContent;
          });
          addGlow(document.querySelector('.Page_tenantId'));
        }

        if(inputUpdatedAt) {
          document.querySelectorAll('.Page_updatedAt').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUpdatedAt.getAttribute('value');
            else
              item.textContent = inputUpdatedAt.textContent;
          });
          addGlow(document.querySelector('.Page_updatedAt'));
        }

        if(inputIsAdminStateUp) {
          document.querySelectorAll('.Page_isAdminStateUp').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIsAdminStateUp.getAttribute('value');
            else
              item.textContent = inputIsAdminStateUp.textContent;
          });
          addGlow(document.querySelector('.Page_isAdminStateUp'));
        }

        if(inputIsDefault) {
          document.querySelectorAll('.Page_isDefault').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIsDefault.getAttribute('value');
            else
              item.textContent = inputIsDefault.textContent;
          });
          addGlow(document.querySelector('.Page_isDefault'));
        }

        if(inputIsPortSecurityEnabled) {
          document.querySelectorAll('.Page_isPortSecurityEnabled').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIsPortSecurityEnabled.getAttribute('value');
            else
              item.textContent = inputIsPortSecurityEnabled.textContent;
          });
          addGlow(document.querySelector('.Page_isPortSecurityEnabled'));
        }

        if(inputIsRouterExternal) {
          document.querySelectorAll('.Page_isRouterExternal').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIsRouterExternal.getAttribute('value');
            else
              item.textContent = inputIsRouterExternal.textContent;
          });
          addGlow(document.querySelector('.Page_isRouterExternal'));
        }

        if(inputIsShared) {
          document.querySelectorAll('.Page_isShared').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIsShared.getAttribute('value');
            else
              item.textContent = inputIsShared.textContent;
          });
          addGlow(document.querySelector('.Page_isShared'));
        }

        if(inputIsVlanQueing) {
          document.querySelectorAll('.Page_isVlanQueing').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIsVlanQueing.getAttribute('value');
            else
              item.textContent = inputIsVlanQueing.textContent;
          });
          addGlow(document.querySelector('.Page_isVlanQueing'));
        }

        if(inputIsVlanTransparent) {
          document.querySelectorAll('.Page_isVlanTransparent').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIsVlanTransparent.getAttribute('value');
            else
              item.textContent = inputIsVlanTransparent.textContent;
          });
          addGlow(document.querySelector('.Page_isVlanTransparent'));
        }

        if(inputL2Adjacency) {
          document.querySelectorAll('.Page_l2Adjacency').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputL2Adjacency.getAttribute('value');
            else
              item.textContent = inputL2Adjacency.textContent;
          });
          addGlow(document.querySelector('.Page_l2Adjacency'));
        }

        if(inputLocationCloud) {
          document.querySelectorAll('.Page_locationCloud').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationCloud.getAttribute('value');
            else
              item.textContent = inputLocationCloud.textContent;
          });
          addGlow(document.querySelector('.Page_locationCloud'));
        }

        if(inputLocationProjectDomainId) {
          document.querySelectorAll('.Page_locationProjectDomainId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationProjectDomainId.getAttribute('value');
            else
              item.textContent = inputLocationProjectDomainId.textContent;
          });
          addGlow(document.querySelector('.Page_locationProjectDomainId'));
        }

        if(inputLocationProjectDomainName) {
          document.querySelectorAll('.Page_locationProjectDomainName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationProjectDomainName.getAttribute('value');
            else
              item.textContent = inputLocationProjectDomainName.textContent;
          });
          addGlow(document.querySelector('.Page_locationProjectDomainName'));
        }

        if(inputLocationProjectId) {
          document.querySelectorAll('.Page_locationProjectId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationProjectId.getAttribute('value');
            else
              item.textContent = inputLocationProjectId.textContent;
          });
          addGlow(document.querySelector('.Page_locationProjectId'));
        }

        if(inputLocationProjectName) {
          document.querySelectorAll('.Page_locationProjectName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationProjectName.getAttribute('value');
            else
              item.textContent = inputLocationProjectName.textContent;
          });
          addGlow(document.querySelector('.Page_locationProjectName'));
        }

        if(inputLocationRegionName) {
          document.querySelectorAll('.Page_locationRegionName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationRegionName.getAttribute('value');
            else
              item.textContent = inputLocationRegionName.textContent;
          });
          addGlow(document.querySelector('.Page_locationRegionName'));
        }

        if(inputLocationZone) {
          document.querySelectorAll('.Page_locationZone').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationZone.getAttribute('value');
            else
              item.textContent = inputLocationZone.textContent;
          });
          addGlow(document.querySelector('.Page_locationZone'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.Page_solrId'));
        }

          pageGraphBareMetalNetwork();
      });
    });
  }
}

function pageGraphBareMetalNetwork(apiRequest) {
  var r = document.querySelector('.pageForm .pageResponse')?.value;
  if(r) {
    var json = JSON.parse(r);
    if(json['facetCounts']) {
      var facetCounts = json.facetCounts;
      if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
        var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
        var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
        var rangeName;
        var rangeVar;
        var rangeVarFq;
        var rangeCounts;
        var rangeVals;
        if(range) {
          rangeName = range.name;
          rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
          rangeVarFq = window.varsFq[rangeVar];
          rangeCounts = range.counts;
          rangeVals = Object.keys(rangeCounts).map(key => key);
        }
        var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
        var pivot1VarIndexed = pivot1Name;
        if(pivot1VarIndexed.includes(','))
          pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
        var pivot1VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot1VarIndexed)[0];
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = 'bare metal networks';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot2VarIndexed)[0];
            var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
            layout['yaxis'] = {
              title: pivot2VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              trace['x'] = Object.keys(pivot1Counts).map(key => key);
              if(pivot2Map) {
                var xs = [];
                var ys = [];
                var pivot2Vals = Object.keys(pivot2Map);
                pivot2Vals.forEach((pivot2Val) => {
                  var pivot2 = pivot2Map[pivot2Val];
                  var pivot2Counts = pivot2.ranges[rangeName].counts;
                  Object.entries(pivot2Counts).forEach(([key, count]) => {
                    xs.push(key);
                    ys.push(parseFloat(pivot2Val));
                  });
                });
                trace['y'] = ys;
                trace['x'] = xs;
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
                trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              }
              data.push(trace);
            });
          } else {
            layout['yaxis'] = {
              title: pivot1VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
                trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
              }
              trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              data.push(trace);
            });
          }
          Plotly.react('htmBodyGraphBareMetalNetworkPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqBareMetalNetwork_time').innerText = '';
  searchPage('BareMetalNetwork', function() {
    let speedRate = parseFloat(document.querySelector('#animateStatsSpeed')?.value) * 1000;
    let xStep = parseFloat(document.querySelector('#animateStatsStep')?.value);
    let xMin = parseFloat(document.querySelector('#animateStatsMin')?.value);
    let xMax = parseFloat(document.querySelector('#animateStatsMax')?.value);
    let x = xMin;

    let animateInterval = window.setInterval(() => {
      x = x + xStep;
      if (x > xMax || x < 0) {
        clearInterval(animateInterval);
      }
      document.querySelector('#fqBareMetalNetwork_time').value = x;
      document.querySelector('#fqBareMetalNetwork_time').onchange();
      searchPage('BareMetalNetwork');
    }, speedRate);
  });
}

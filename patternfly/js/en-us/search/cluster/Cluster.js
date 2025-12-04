
// Search //

async function searchCluster($formFilters, success, error) {
  var filters = searchClusterFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchClusterVals(filters, target, success, error);
}

function searchClusterFilters($formFilters) {
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

    var filterHubId = $formFilters.querySelector('.valueHubId')?.value;
    if(filterHubId != null && filterHubId !== '')
      filters.push({ name: 'fq', value: 'hubId:' + filterHubId });

    var filterClusterName = $formFilters.querySelector('.valueClusterName')?.value;
    if(filterClusterName != null && filterClusterName !== '')
      filters.push({ name: 'fq', value: 'clusterName:' + filterClusterName });

    var $filterHubClusterCheckbox = $formFilters.querySelector('input.valueHubCluster[type = "checkbox"]');
    var $filterHubClusterSelect = $formFilters.querySelector('select.valueHubCluster');
    var filterHubCluster = $filterHubClusterSelect.length ? $filterHubClusterSelect.value : $filterHubClusterCheckbox.checked;
    var filterHubClusterSelectVal = $formFilters.querySelector('select.filterHubCluster')?.value;
    var filterHubCluster = null;
    if(filterHubClusterSelectVal !== '')
      filterHubCluster = filterHubClusterSelectVal == 'true';
    if(filterHubCluster != null && filterHubCluster === true)
      filters.push({ name: 'fq', value: 'hubCluster:' + filterHubCluster });

    var filterClusterNameMetrics = $formFilters.querySelector('.valueClusterNameMetrics')?.value;
    if(filterClusterNameMetrics != null && filterClusterNameMetrics !== '')
      filters.push({ name: 'fq', value: 'clusterNameMetrics:' + filterClusterNameMetrics });

    var filterUniqueName = $formFilters.querySelector('.valueUniqueName')?.value;
    if(filterUniqueName != null && filterUniqueName !== '')
      filters.push({ name: 'fq', value: 'uniqueName:' + filterUniqueName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterAiNodesTotal = $formFilters.querySelector('.valueAiNodesTotal')?.value;
    if(filterAiNodesTotal != null && filterAiNodesTotal !== '')
      filters.push({ name: 'fq', value: 'aiNodesTotal:' + filterAiNodesTotal });

    var filterGpuDevicesTotal = $formFilters.querySelector('.valueGpuDevicesTotal')?.value;
    if(filterGpuDevicesTotal != null && filterGpuDevicesTotal !== '')
      filters.push({ name: 'fq', value: 'gpuDevicesTotal:' + filterGpuDevicesTotal });

    var filterVmsTotal = $formFilters.querySelector('.valueVmsTotal')?.value;
    if(filterVmsTotal != null && filterVmsTotal !== '')
      filters.push({ name: 'fq', value: 'vmsTotal:' + filterVmsTotal });

    var filterGrafanaUrl = $formFilters.querySelector('.valueGrafanaUrl')?.value;
    if(filterGrafanaUrl != null && filterGrafanaUrl !== '')
      filters.push({ name: 'fq', value: 'grafanaUrl:' + filterGrafanaUrl });

    var filterCpuCoresTotal = $formFilters.querySelector('.valueCpuCoresTotal')?.value;
    if(filterCpuCoresTotal != null && filterCpuCoresTotal !== '')
      filters.push({ name: 'fq', value: 'cpuCoresTotal:' + filterCpuCoresTotal });

    var filterMemoryBytesTotal = $formFilters.querySelector('.valueMemoryBytesTotal')?.value;
    if(filterMemoryBytesTotal != null && filterMemoryBytesTotal !== '')
      filters.push({ name: 'fq', value: 'memoryBytesTotal:' + filterMemoryBytesTotal });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterNgsildTenant = $formFilters.querySelector('.valueNgsildTenant')?.value;
    if(filterNgsildTenant != null && filterNgsildTenant !== '')
      filters.push({ name: 'fq', value: 'ngsildTenant:' + filterNgsildTenant });

    var filterNgsildPath = $formFilters.querySelector('.valueNgsildPath')?.value;
    if(filterNgsildPath != null && filterNgsildPath !== '')
      filters.push({ name: 'fq', value: 'ngsildPath:' + filterNgsildPath });

    var filterNgsildContext = $formFilters.querySelector('.valueNgsildContext')?.value;
    if(filterNgsildContext != null && filterNgsildContext !== '')
      filters.push({ name: 'fq', value: 'ngsildContext:' + filterNgsildContext });

    var filterNgsildData = $formFilters.querySelector('.valueNgsildData')?.value;
    if(filterNgsildData != null && filterNgsildData !== '')
      filters.push({ name: 'fq', value: 'ngsildData:' + filterNgsildData });

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

    var filterHubResource = $formFilters.querySelector('.valueHubResource')?.value;
    if(filterHubResource != null && filterHubResource !== '')
      filters.push({ name: 'fq', value: 'hubResource:' + filterHubResource });

    var filterClusterResource = $formFilters.querySelector('.valueClusterResource')?.value;
    if(filterClusterResource != null && filterClusterResource !== '')
      filters.push({ name: 'fq', value: 'clusterResource:' + filterClusterResource });

    var filterLocationColors = $formFilters.querySelector('.valueLocationColors')?.value;
    if(filterLocationColors != null && filterLocationColors !== '')
      filters.push({ name: 'fq', value: 'locationColors:' + filterLocationColors });

    var filterLocationTitles = $formFilters.querySelector('.valueLocationTitles')?.value;
    if(filterLocationTitles != null && filterLocationTitles !== '')
      filters.push({ name: 'fq', value: 'locationTitles:' + filterLocationTitles });

    var filterLocationLinks = $formFilters.querySelector('.valueLocationLinks')?.value;
    if(filterLocationLinks != null && filterLocationLinks !== '')
      filters.push({ name: 'fq', value: 'locationLinks:' + filterLocationLinks });
  }
  return filters;
}

function searchClusterVals(filters, target, success, error) {


  fetch(
    '/en-us/api/cluster?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestClusterHubResource(filters, $list, clusterResource = null, hubResource = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-regular fa-sitemap"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = 
o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var val = o['hubResource'];
        var checked = val == null ? false : (Array.isArray(val) ? val.includes(clusterResource.toString()) : val == hubResource);
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_hubResource_' + clusterResource + '_hubResource_' + o['hubResource']);
        $input.setAttribute('name', 'hubResource');
        $input.setAttribute('value', o['hubResource']);
        $input.setAttribute('class', 'valueHubResource ');
        if(clusterResource != null) {
          $input.addEventListener('change', function(event) {
            patchClusterVals([{ name: 'fq', value: 'clusterResource:' + clusterResource }], { [(event.target.checked ? 'set' : 'remove') + 'HubResource']: o['hubResource'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestClusterHubResource(filters, $list, clusterResource, o['hubResource'], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchHubVals(filters, target, success, error);
}

function suggestClusterObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-regular fa-server"></i>');
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
  searchClusterVals($formFilters, target, success, error);
}

// GET //

async function getCluster(pk) {
  fetch(
    '/en-us/api/cluster/' + clusterResource
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

async function patchCluster($formFilters, $formValues, target, clusterResource, success, error) {
  var filters = patchClusterFilters($formFilters);

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

  var valueHubId = $formValues.querySelector('.valueHubId')?.value;
  var removeHubId = $formValues.querySelector('.removeHubId')?.value === 'true';
  var setHubId = removeHubId ? null : $formValues.querySelector('.setHubId')?.value;
  var addHubId = $formValues.querySelector('.addHubId')?.value;
  if(removeHubId || setHubId != null && setHubId !== '')
    vals['setHubId'] = setHubId;
  if(addHubId != null && addHubId !== '')
    vals['addHubId'] = addHubId;
  var removeHubId = $formValues.querySelector('.removeHubId')?.value;
  if(removeHubId != null && removeHubId !== '')
    vals['removeHubId'] = removeHubId;

  var valueClusterName = $formValues.querySelector('.valueClusterName')?.value;
  var removeClusterName = $formValues.querySelector('.removeClusterName')?.value === 'true';
  var setClusterName = removeClusterName ? null : $formValues.querySelector('.setClusterName')?.value;
  var addClusterName = $formValues.querySelector('.addClusterName')?.value;
  if(removeClusterName || setClusterName != null && setClusterName !== '')
    vals['setClusterName'] = setClusterName;
  if(addClusterName != null && addClusterName !== '')
    vals['addClusterName'] = addClusterName;
  var removeClusterName = $formValues.querySelector('.removeClusterName')?.value;
  if(removeClusterName != null && removeClusterName !== '')
    vals['removeClusterName'] = removeClusterName;

  var valueHubCluster = $formValues.querySelector('.valueHubCluster')?.value;
  var removeHubCluster = $formValues.querySelector('.removeHubCluster')?.value === 'true';
  if(valueHubCluster != null)
    valueHubCluster = valueHubCluster === 'true';
  var valueHubClusterSelectVal = $formValues.querySelector('select.setHubCluster')?.value;
  if(valueHubClusterSelectVal != null)
    valueHubClusterSelectVal = valueHubClusterSelectVal === 'true';
  if(valueHubClusterSelectVal != null && valueHubClusterSelectVal !== '')
    valueHubCluster = valueHubClusterSelectVal == 'true';
  var setHubCluster = removeHubCluster ? null : valueHubCluster;
  var addHubCluster = $formValues.querySelector('.addHubCluster')?.checked;
  if(removeHubCluster || setHubCluster != null && setHubCluster !== '')
    vals['setHubCluster'] = setHubCluster;
  if(addHubCluster != null && addHubCluster !== '')
    vals['addHubCluster'] = addHubCluster;
  var removeHubCluster = $formValues.querySelector('.removeHubCluster')?.checked;
  if(removeHubCluster != null && removeHubCluster !== '')
    vals['removeHubCluster'] = removeHubCluster;

  var valueClusterNameMetrics = $formValues.querySelector('.valueClusterNameMetrics')?.value;
  var removeClusterNameMetrics = $formValues.querySelector('.removeClusterNameMetrics')?.value === 'true';
  var setClusterNameMetrics = removeClusterNameMetrics ? null : $formValues.querySelector('.setClusterNameMetrics')?.value;
  var addClusterNameMetrics = $formValues.querySelector('.addClusterNameMetrics')?.value;
  if(removeClusterNameMetrics || setClusterNameMetrics != null && setClusterNameMetrics !== '')
    vals['setClusterNameMetrics'] = setClusterNameMetrics;
  if(addClusterNameMetrics != null && addClusterNameMetrics !== '')
    vals['addClusterNameMetrics'] = addClusterNameMetrics;
  var removeClusterNameMetrics = $formValues.querySelector('.removeClusterNameMetrics')?.value;
  if(removeClusterNameMetrics != null && removeClusterNameMetrics !== '')
    vals['removeClusterNameMetrics'] = removeClusterNameMetrics;

  var valueUniqueName = $formValues.querySelector('.valueUniqueName')?.value;
  var removeUniqueName = $formValues.querySelector('.removeUniqueName')?.value === 'true';
  var setUniqueName = removeUniqueName ? null : $formValues.querySelector('.setUniqueName')?.value;
  var addUniqueName = $formValues.querySelector('.addUniqueName')?.value;
  if(removeUniqueName || setUniqueName != null && setUniqueName !== '')
    vals['setUniqueName'] = setUniqueName;
  if(addUniqueName != null && addUniqueName !== '')
    vals['addUniqueName'] = addUniqueName;
  var removeUniqueName = $formValues.querySelector('.removeUniqueName')?.value;
  if(removeUniqueName != null && removeUniqueName !== '')
    vals['removeUniqueName'] = removeUniqueName;

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

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  var removeLocation = $formValues.querySelector('.removeLocation')?.value === 'true';
  var setLocation = removeLocation ? null : $formValues.querySelector('.setLocation')?.value;
  var addLocation = $formValues.querySelector('.addLocation')?.value;
  if(removeLocation || setLocation != null && setLocation !== '')
    vals['setLocation'] = JSON.parse(setLocation);
  if(addLocation != null && addLocation !== '')
    vals['addLocation'] = addLocation;
  var removeLocation = $formValues.querySelector('.removeLocation')?.value;
  if(removeLocation != null && removeLocation !== '')
    vals['removeLocation'] = removeLocation;

  var valueAiNodesTotal = $formValues.querySelector('.valueAiNodesTotal')?.value;
  var removeAiNodesTotal = $formValues.querySelector('.removeAiNodesTotal')?.value === 'true';
  var setAiNodesTotal = removeAiNodesTotal ? null : $formValues.querySelector('.setAiNodesTotal')?.value;
  var addAiNodesTotal = $formValues.querySelector('.addAiNodesTotal')?.value;
  if(removeAiNodesTotal || setAiNodesTotal != null && setAiNodesTotal !== '')
    vals['setAiNodesTotal'] = setAiNodesTotal;
  if(addAiNodesTotal != null && addAiNodesTotal !== '')
    vals['addAiNodesTotal'] = addAiNodesTotal;
  var removeAiNodesTotal = $formValues.querySelector('.removeAiNodesTotal')?.value;
  if(removeAiNodesTotal != null && removeAiNodesTotal !== '')
    vals['removeAiNodesTotal'] = removeAiNodesTotal;

  var valueGpuDevicesTotal = $formValues.querySelector('.valueGpuDevicesTotal')?.value;
  var removeGpuDevicesTotal = $formValues.querySelector('.removeGpuDevicesTotal')?.value === 'true';
  var setGpuDevicesTotal = removeGpuDevicesTotal ? null : $formValues.querySelector('.setGpuDevicesTotal')?.value;
  var addGpuDevicesTotal = $formValues.querySelector('.addGpuDevicesTotal')?.value;
  if(removeGpuDevicesTotal || setGpuDevicesTotal != null && setGpuDevicesTotal !== '')
    vals['setGpuDevicesTotal'] = setGpuDevicesTotal;
  if(addGpuDevicesTotal != null && addGpuDevicesTotal !== '')
    vals['addGpuDevicesTotal'] = addGpuDevicesTotal;
  var removeGpuDevicesTotal = $formValues.querySelector('.removeGpuDevicesTotal')?.value;
  if(removeGpuDevicesTotal != null && removeGpuDevicesTotal !== '')
    vals['removeGpuDevicesTotal'] = removeGpuDevicesTotal;

  var valueVmsTotal = $formValues.querySelector('.valueVmsTotal')?.value;
  var removeVmsTotal = $formValues.querySelector('.removeVmsTotal')?.value === 'true';
  var setVmsTotal = removeVmsTotal ? null : $formValues.querySelector('.setVmsTotal')?.value;
  var addVmsTotal = $formValues.querySelector('.addVmsTotal')?.value;
  if(removeVmsTotal || setVmsTotal != null && setVmsTotal !== '')
    vals['setVmsTotal'] = setVmsTotal;
  if(addVmsTotal != null && addVmsTotal !== '')
    vals['addVmsTotal'] = addVmsTotal;
  var removeVmsTotal = $formValues.querySelector('.removeVmsTotal')?.value;
  if(removeVmsTotal != null && removeVmsTotal !== '')
    vals['removeVmsTotal'] = removeVmsTotal;

  var valueGrafanaUrl = $formValues.querySelector('.valueGrafanaUrl')?.value;
  var removeGrafanaUrl = $formValues.querySelector('.removeGrafanaUrl')?.value === 'true';
  var setGrafanaUrl = removeGrafanaUrl ? null : $formValues.querySelector('.setGrafanaUrl')?.value;
  var addGrafanaUrl = $formValues.querySelector('.addGrafanaUrl')?.value;
  if(removeGrafanaUrl || setGrafanaUrl != null && setGrafanaUrl !== '')
    vals['setGrafanaUrl'] = setGrafanaUrl;
  if(addGrafanaUrl != null && addGrafanaUrl !== '')
    vals['addGrafanaUrl'] = addGrafanaUrl;
  var removeGrafanaUrl = $formValues.querySelector('.removeGrafanaUrl')?.value;
  if(removeGrafanaUrl != null && removeGrafanaUrl !== '')
    vals['removeGrafanaUrl'] = removeGrafanaUrl;

  var valueCpuCoresTotal = $formValues.querySelector('.valueCpuCoresTotal')?.value;
  var removeCpuCoresTotal = $formValues.querySelector('.removeCpuCoresTotal')?.value === 'true';
  var setCpuCoresTotal = removeCpuCoresTotal ? null : $formValues.querySelector('.setCpuCoresTotal')?.value;
  var addCpuCoresTotal = $formValues.querySelector('.addCpuCoresTotal')?.value;
  if(removeCpuCoresTotal || setCpuCoresTotal != null && setCpuCoresTotal !== '')
    vals['setCpuCoresTotal'] = setCpuCoresTotal;
  if(addCpuCoresTotal != null && addCpuCoresTotal !== '')
    vals['addCpuCoresTotal'] = addCpuCoresTotal;
  var removeCpuCoresTotal = $formValues.querySelector('.removeCpuCoresTotal')?.value;
  if(removeCpuCoresTotal != null && removeCpuCoresTotal !== '')
    vals['removeCpuCoresTotal'] = removeCpuCoresTotal;

  var valueMemoryBytesTotal = $formValues.querySelector('.valueMemoryBytesTotal')?.value;
  var removeMemoryBytesTotal = $formValues.querySelector('.removeMemoryBytesTotal')?.value === 'true';
  var setMemoryBytesTotal = removeMemoryBytesTotal ? null : $formValues.querySelector('.setMemoryBytesTotal')?.value;
  var addMemoryBytesTotal = $formValues.querySelector('.addMemoryBytesTotal')?.value;
  if(removeMemoryBytesTotal || setMemoryBytesTotal != null && setMemoryBytesTotal !== '')
    vals['setMemoryBytesTotal'] = setMemoryBytesTotal;
  if(addMemoryBytesTotal != null && addMemoryBytesTotal !== '')
    vals['addMemoryBytesTotal'] = addMemoryBytesTotal;
  var removeMemoryBytesTotal = $formValues.querySelector('.removeMemoryBytesTotal')?.value;
  if(removeMemoryBytesTotal != null && removeMemoryBytesTotal !== '')
    vals['removeMemoryBytesTotal'] = removeMemoryBytesTotal;

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

  var valueNgsildTenant = $formValues.querySelector('.valueNgsildTenant')?.value;
  var removeNgsildTenant = $formValues.querySelector('.removeNgsildTenant')?.value === 'true';
  var setNgsildTenant = removeNgsildTenant ? null : $formValues.querySelector('.setNgsildTenant')?.value;
  var addNgsildTenant = $formValues.querySelector('.addNgsildTenant')?.value;
  if(removeNgsildTenant || setNgsildTenant != null && setNgsildTenant !== '')
    vals['setNgsildTenant'] = setNgsildTenant;
  if(addNgsildTenant != null && addNgsildTenant !== '')
    vals['addNgsildTenant'] = addNgsildTenant;
  var removeNgsildTenant = $formValues.querySelector('.removeNgsildTenant')?.value;
  if(removeNgsildTenant != null && removeNgsildTenant !== '')
    vals['removeNgsildTenant'] = removeNgsildTenant;

  var valueNgsildPath = $formValues.querySelector('.valueNgsildPath')?.value;
  var removeNgsildPath = $formValues.querySelector('.removeNgsildPath')?.value === 'true';
  var setNgsildPath = removeNgsildPath ? null : $formValues.querySelector('.setNgsildPath')?.value;
  var addNgsildPath = $formValues.querySelector('.addNgsildPath')?.value;
  if(removeNgsildPath || setNgsildPath != null && setNgsildPath !== '')
    vals['setNgsildPath'] = setNgsildPath;
  if(addNgsildPath != null && addNgsildPath !== '')
    vals['addNgsildPath'] = addNgsildPath;
  var removeNgsildPath = $formValues.querySelector('.removeNgsildPath')?.value;
  if(removeNgsildPath != null && removeNgsildPath !== '')
    vals['removeNgsildPath'] = removeNgsildPath;

  var valueNgsildContext = $formValues.querySelector('.valueNgsildContext')?.value;
  var removeNgsildContext = $formValues.querySelector('.removeNgsildContext')?.value === 'true';
  var setNgsildContext = removeNgsildContext ? null : $formValues.querySelector('.setNgsildContext')?.value;
  var addNgsildContext = $formValues.querySelector('.addNgsildContext')?.value;
  if(removeNgsildContext || setNgsildContext != null && setNgsildContext !== '')
    vals['setNgsildContext'] = setNgsildContext;
  if(addNgsildContext != null && addNgsildContext !== '')
    vals['addNgsildContext'] = addNgsildContext;
  var removeNgsildContext = $formValues.querySelector('.removeNgsildContext')?.value;
  if(removeNgsildContext != null && removeNgsildContext !== '')
    vals['removeNgsildContext'] = removeNgsildContext;

  var valueNgsildData = $formValues.querySelector('.valueNgsildData')?.value;
  var removeNgsildData = $formValues.querySelector('.removeNgsildData')?.value === 'true';
  var setNgsildData = removeNgsildData ? null : $formValues.querySelector('.setNgsildData')?.value;
  var addNgsildData = $formValues.querySelector('.addNgsildData')?.value;
  if(removeNgsildData || setNgsildData != null && setNgsildData !== '')
    vals['setNgsildData'] = JSON.parse(setNgsildData);
  if(addNgsildData != null && addNgsildData !== '')
    vals['addNgsildData'] = addNgsildData;
  var removeNgsildData = $formValues.querySelector('.removeNgsildData')?.value;
  if(removeNgsildData != null && removeNgsildData !== '')
    vals['removeNgsildData'] = removeNgsildData;

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

  var valueHubResource = (Array.from($formValues.querySelectorAll('.valueHubResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueHubResource != null && valueHubResource !== '')
    vals['setHubResource'] = valueHubResource;

  var valueClusterResource = $formValues.querySelector('.valueClusterResource')?.value;
  var removeClusterResource = $formValues.querySelector('.removeClusterResource')?.value === 'true';
  var setClusterResource = removeClusterResource ? null : $formValues.querySelector('.setClusterResource')?.value;
  var addClusterResource = $formValues.querySelector('.addClusterResource')?.value;
  if(removeClusterResource || setClusterResource != null && setClusterResource !== '')
    vals['setClusterResource'] = setClusterResource;
  if(addClusterResource != null && addClusterResource !== '')
    vals['addClusterResource'] = addClusterResource;
  var removeClusterResource = $formValues.querySelector('.removeClusterResource')?.value;
  if(removeClusterResource != null && removeClusterResource !== '')
    vals['removeClusterResource'] = removeClusterResource;

  patchClusterVals(clusterResource == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'clusterResource:' + clusterResource}], vals, target, success, error);
}

function patchClusterFilters($formFilters) {
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

    var filterHubId = $formFilters.querySelector('.valueHubId')?.value;
    if(filterHubId != null && filterHubId !== '')
      filters.push({ name: 'fq', value: 'hubId:' + filterHubId });

    var filterClusterName = $formFilters.querySelector('.valueClusterName')?.value;
    if(filterClusterName != null && filterClusterName !== '')
      filters.push({ name: 'fq', value: 'clusterName:' + filterClusterName });

    var $filterHubClusterCheckbox = $formFilters.querySelector('input.valueHubCluster[type = "checkbox"]');
    var $filterHubClusterSelect = $formFilters.querySelector('select.valueHubCluster');
    var filterHubCluster = $filterHubClusterSelect.length ? $filterHubClusterSelect.value : $filterHubClusterCheckbox.checked;
    var filterHubClusterSelectVal = $formFilters.querySelector('select.filterHubCluster')?.value;
    var filterHubCluster = null;
    if(filterHubClusterSelectVal !== '')
      filterHubCluster = filterHubClusterSelectVal == 'true';
    if(filterHubCluster != null && filterHubCluster === true)
      filters.push({ name: 'fq', value: 'hubCluster:' + filterHubCluster });

    var filterClusterNameMetrics = $formFilters.querySelector('.valueClusterNameMetrics')?.value;
    if(filterClusterNameMetrics != null && filterClusterNameMetrics !== '')
      filters.push({ name: 'fq', value: 'clusterNameMetrics:' + filterClusterNameMetrics });

    var filterUniqueName = $formFilters.querySelector('.valueUniqueName')?.value;
    if(filterUniqueName != null && filterUniqueName !== '')
      filters.push({ name: 'fq', value: 'uniqueName:' + filterUniqueName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterAiNodesTotal = $formFilters.querySelector('.valueAiNodesTotal')?.value;
    if(filterAiNodesTotal != null && filterAiNodesTotal !== '')
      filters.push({ name: 'fq', value: 'aiNodesTotal:' + filterAiNodesTotal });

    var filterGpuDevicesTotal = $formFilters.querySelector('.valueGpuDevicesTotal')?.value;
    if(filterGpuDevicesTotal != null && filterGpuDevicesTotal !== '')
      filters.push({ name: 'fq', value: 'gpuDevicesTotal:' + filterGpuDevicesTotal });

    var filterVmsTotal = $formFilters.querySelector('.valueVmsTotal')?.value;
    if(filterVmsTotal != null && filterVmsTotal !== '')
      filters.push({ name: 'fq', value: 'vmsTotal:' + filterVmsTotal });

    var filterGrafanaUrl = $formFilters.querySelector('.valueGrafanaUrl')?.value;
    if(filterGrafanaUrl != null && filterGrafanaUrl !== '')
      filters.push({ name: 'fq', value: 'grafanaUrl:' + filterGrafanaUrl });

    var filterCpuCoresTotal = $formFilters.querySelector('.valueCpuCoresTotal')?.value;
    if(filterCpuCoresTotal != null && filterCpuCoresTotal !== '')
      filters.push({ name: 'fq', value: 'cpuCoresTotal:' + filterCpuCoresTotal });

    var filterMemoryBytesTotal = $formFilters.querySelector('.valueMemoryBytesTotal')?.value;
    if(filterMemoryBytesTotal != null && filterMemoryBytesTotal !== '')
      filters.push({ name: 'fq', value: 'memoryBytesTotal:' + filterMemoryBytesTotal });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterNgsildTenant = $formFilters.querySelector('.valueNgsildTenant')?.value;
    if(filterNgsildTenant != null && filterNgsildTenant !== '')
      filters.push({ name: 'fq', value: 'ngsildTenant:' + filterNgsildTenant });

    var filterNgsildPath = $formFilters.querySelector('.valueNgsildPath')?.value;
    if(filterNgsildPath != null && filterNgsildPath !== '')
      filters.push({ name: 'fq', value: 'ngsildPath:' + filterNgsildPath });

    var filterNgsildContext = $formFilters.querySelector('.valueNgsildContext')?.value;
    if(filterNgsildContext != null && filterNgsildContext !== '')
      filters.push({ name: 'fq', value: 'ngsildContext:' + filterNgsildContext });

    var filterNgsildData = $formFilters.querySelector('.valueNgsildData')?.value;
    if(filterNgsildData != null && filterNgsildData !== '')
      filters.push({ name: 'fq', value: 'ngsildData:' + filterNgsildData });

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

    var filterHubResource = $formFilters.querySelector('.valueHubResource')?.value;
    if(filterHubResource != null && filterHubResource !== '')
      filters.push({ name: 'fq', value: 'hubResource:' + filterHubResource });

    var filterClusterResource = $formFilters.querySelector('.valueClusterResource')?.value;
    if(filterClusterResource != null && filterClusterResource !== '')
      filters.push({ name: 'fq', value: 'clusterResource:' + filterClusterResource });

    var filterLocationColors = $formFilters.querySelector('.valueLocationColors')?.value;
    if(filterLocationColors != null && filterLocationColors !== '')
      filters.push({ name: 'fq', value: 'locationColors:' + filterLocationColors });

    var filterLocationTitles = $formFilters.querySelector('.valueLocationTitles')?.value;
    if(filterLocationTitles != null && filterLocationTitles !== '')
      filters.push({ name: 'fq', value: 'locationTitles:' + filterLocationTitles });

    var filterLocationLinks = $formFilters.querySelector('.valueLocationLinks')?.value;
    if(filterLocationLinks != null && filterLocationLinks !== '')
      filters.push({ name: 'fq', value: 'locationLinks:' + filterLocationLinks });
  }
  return filters;
}

function patchClusterVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchClusterVals(filters, vals, target, success, error);
}

function patchClusterVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/cluster?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postCluster($formValues, target, success, error) {
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

  var valueHubId = $formValues.querySelector('.valueHubId')?.value;
  if(valueHubId != null && valueHubId !== '')
    vals['hubId'] = valueHubId;

  var valueClusterName = $formValues.querySelector('.valueClusterName')?.value;
  if(valueClusterName != null && valueClusterName !== '')
    vals['clusterName'] = valueClusterName;

  var valueHubCluster = $formValues.querySelector('.valueHubCluster')?.value;
  if(valueHubCluster != null && valueHubCluster !== '')
    vals['hubCluster'] = valueHubCluster == 'true';

  var valueClusterNameMetrics = $formValues.querySelector('.valueClusterNameMetrics')?.value;
  if(valueClusterNameMetrics != null && valueClusterNameMetrics !== '')
    vals['clusterNameMetrics'] = valueClusterNameMetrics;

  var valueUniqueName = $formValues.querySelector('.valueUniqueName')?.value;
  if(valueUniqueName != null && valueUniqueName !== '')
    vals['uniqueName'] = valueUniqueName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

  var valueAiNodesTotal = $formValues.querySelector('.valueAiNodesTotal')?.value;
  if(valueAiNodesTotal != null && valueAiNodesTotal !== '')
    vals['aiNodesTotal'] = valueAiNodesTotal;

  var valueGpuDevicesTotal = $formValues.querySelector('.valueGpuDevicesTotal')?.value;
  if(valueGpuDevicesTotal != null && valueGpuDevicesTotal !== '')
    vals['gpuDevicesTotal'] = valueGpuDevicesTotal;

  var valueVmsTotal = $formValues.querySelector('.valueVmsTotal')?.value;
  if(valueVmsTotal != null && valueVmsTotal !== '')
    vals['vmsTotal'] = valueVmsTotal;

  var valueGrafanaUrl = $formValues.querySelector('.valueGrafanaUrl')?.value;
  if(valueGrafanaUrl != null && valueGrafanaUrl !== '')
    vals['grafanaUrl'] = valueGrafanaUrl;

  var valueCpuCoresTotal = $formValues.querySelector('.valueCpuCoresTotal')?.value;
  if(valueCpuCoresTotal != null && valueCpuCoresTotal !== '')
    vals['cpuCoresTotal'] = valueCpuCoresTotal;

  var valueMemoryBytesTotal = $formValues.querySelector('.valueMemoryBytesTotal')?.value;
  if(valueMemoryBytesTotal != null && valueMemoryBytesTotal !== '')
    vals['memoryBytesTotal'] = valueMemoryBytesTotal;

  var valueId = $formValues.querySelector('.valueId')?.value;
  if(valueId != null && valueId !== '')
    vals['id'] = valueId;

  var valueNgsildTenant = $formValues.querySelector('.valueNgsildTenant')?.value;
  if(valueNgsildTenant != null && valueNgsildTenant !== '')
    vals['ngsildTenant'] = valueNgsildTenant;

  var valueNgsildPath = $formValues.querySelector('.valueNgsildPath')?.value;
  if(valueNgsildPath != null && valueNgsildPath !== '')
    vals['ngsildPath'] = valueNgsildPath;

  var valueNgsildContext = $formValues.querySelector('.valueNgsildContext')?.value;
  if(valueNgsildContext != null && valueNgsildContext !== '')
    vals['ngsildContext'] = valueNgsildContext;

  var valueNgsildData = $formValues.querySelector('.valueNgsildData')?.value;
  if(valueNgsildData != null && valueNgsildData !== '')
    vals['ngsildData'] = JSON.parse(valueNgsildData);

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

  var valueHubResource = (Array.from($formValues.querySelectorAll('.valueHubResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueHubResource != null && valueHubResource !== '')
    vals['hubResource'] = valueHubResource;

  var valueClusterResource = $formValues.querySelector('.valueClusterResource')?.value;
  if(valueClusterResource != null && valueClusterResource !== '')
    vals['clusterResource'] = valueClusterResource;

  fetch(
    '/en-us/api/cluster'
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

function postClusterVals(vals, target, success, error) {
  fetch(
    '/en-us/api/cluster'
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

async function deleteCluster(target, clusterResource, success, error) {
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
    '/en-us/api/cluster/' + encodeURIComponent(clusterResource)
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

async function putimportCluster($formValues, target, clusterResource, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportClusterVals(JSON.parse(json), target, success, error);
}

function putimportClusterVals(json, target, success, error) {
  fetch(
    '/en-us/api/cluster-import'
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

async function deletefilterCluster(target, success, error) {
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
    '/en-us/api/cluster'
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

async function websocketCluster(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketCluster', function (error, message) {
      var json = JSON.parse(message['body']);
      var clusterResource = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + clusterResource + ' ');
      $box.setAttribute('id', 'box-' + clusterResource);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + clusterResource);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + clusterResource);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + clusterResource);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-regular fa-server"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify OpenShift clusters in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + clusterResource + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + clusterResource);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + clusterResource);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + clusterResource);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + clusterResource);
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
        var $old_box = document.querySelector('.box-' + clusterResource);
      } else {
        document.querySelector('.box-' + clusterResource)?.remove();
      }
      if(clusterResource) {
        if(success)
          success(json);
      }
    });

    window.eventBus.registerHandler('websocketHub', function (error, message) {
      document.querySelector('.Page_hubResource').trigger('oninput');
      document.querySelector('.Page_hubResource_add').innerText = 'add a hub';
      document.querySelector('.Page_hubResource_add').classList.remove('w3-disabled');
      document.querySelector('.Page_hubResource_add').setAttribute('disabled', false);
    });
  }
}
async function websocketClusterInner(apiRequest) {
  var clusterResource = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(clusterResource != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputHubId = null;
        var inputClusterName = null;
        var inputHubCluster = null;
        var inputClusterNameMetrics = null;
        var inputUniqueName = null;
        var inputDescription = null;
        var inputLocation = null;
        var inputAiNodesTotal = null;
        var inputGpuDevicesTotal = null;
        var inputVmsTotal = null;
        var inputGrafanaUrl = null;
        var inputCpuCoresTotal = null;
        var inputMemoryBytesTotal = null;
        var inputId = null;
        var inputNgsildTenant = null;
        var inputNgsildPath = null;
        var inputNgsildContext = null;
        var inputNgsildData = null;
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
        var inputHubResource = null;
        var inputClusterResource = null;
        var inputLocationColors = null;
        var inputLocationTitles = null;
        var inputLocationLinks = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Page_archived');
        if(vars.includes('hubId'))
          inputHubId = $response.querySelector('.Page_hubId');
        if(vars.includes('clusterName'))
          inputClusterName = $response.querySelector('.Page_clusterName');
        if(vars.includes('hubCluster'))
          inputHubCluster = $response.querySelector('.Page_hubCluster');
        if(vars.includes('clusterNameMetrics'))
          inputClusterNameMetrics = $response.querySelector('.Page_clusterNameMetrics');
        if(vars.includes('uniqueName'))
          inputUniqueName = $response.querySelector('.Page_uniqueName');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.Page_description');
        if(vars.includes('location'))
          inputLocation = $response.querySelector('.Page_location');
        if(vars.includes('aiNodesTotal'))
          inputAiNodesTotal = $response.querySelector('.Page_aiNodesTotal');
        if(vars.includes('gpuDevicesTotal'))
          inputGpuDevicesTotal = $response.querySelector('.Page_gpuDevicesTotal');
        if(vars.includes('vmsTotal'))
          inputVmsTotal = $response.querySelector('.Page_vmsTotal');
        if(vars.includes('grafanaUrl'))
          inputGrafanaUrl = $response.querySelector('.Page_grafanaUrl');
        if(vars.includes('cpuCoresTotal'))
          inputCpuCoresTotal = $response.querySelector('.Page_cpuCoresTotal');
        if(vars.includes('memoryBytesTotal'))
          inputMemoryBytesTotal = $response.querySelector('.Page_memoryBytesTotal');
        if(vars.includes('id'))
          inputId = $response.querySelector('.Page_id');
        if(vars.includes('ngsildTenant'))
          inputNgsildTenant = $response.querySelector('.Page_ngsildTenant');
        if(vars.includes('ngsildPath'))
          inputNgsildPath = $response.querySelector('.Page_ngsildPath');
        if(vars.includes('ngsildContext'))
          inputNgsildContext = $response.querySelector('.Page_ngsildContext');
        if(vars.includes('ngsildData'))
          inputNgsildData = $response.querySelector('.Page_ngsildData');
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
        if(vars.includes('hubResource'))
          inputHubResource = $response.querySelector('.Page_hubResource');
        if(vars.includes('clusterResource'))
          inputClusterResource = $response.querySelector('.Page_clusterResource');
        if(vars.includes('locationColors'))
          inputLocationColors = $response.querySelector('.Page_locationColors');
        if(vars.includes('locationTitles'))
          inputLocationTitles = $response.querySelector('.Page_locationTitles');
        if(vars.includes('locationLinks'))
          inputLocationLinks = $response.querySelector('.Page_locationLinks');

        jsWebsocketCluster(clusterResource, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listCluster = JSON.parse($response.querySelector('.pageForm .listCluster')?.value);


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

        if(inputHubId) {
          document.querySelectorAll('.Page_hubId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputHubId.getAttribute('value');
            else
              item.textContent = inputHubId.textContent;
          });
          addGlow(document.querySelector('.Page_hubId'));
        }

        if(inputClusterName) {
          document.querySelectorAll('.Page_clusterName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClusterName.getAttribute('value');
            else
              item.textContent = inputClusterName.textContent;
          });
          addGlow(document.querySelector('.Page_clusterName'));
        }

        if(inputHubCluster) {
          document.querySelectorAll('.Page_hubCluster').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputHubCluster.getAttribute('value');
            else
              item.textContent = inputHubCluster.textContent;
          });
          addGlow(document.querySelector('.Page_hubCluster'));
        }

        if(inputClusterNameMetrics) {
          document.querySelectorAll('.Page_clusterNameMetrics').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClusterNameMetrics.getAttribute('value');
            else
              item.textContent = inputClusterNameMetrics.textContent;
          });
          addGlow(document.querySelector('.Page_clusterNameMetrics'));
        }

        if(inputUniqueName) {
          document.querySelectorAll('.Page_uniqueName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUniqueName.getAttribute('value');
            else
              item.textContent = inputUniqueName.textContent;
          });
          addGlow(document.querySelector('.Page_uniqueName'));
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

        if(inputLocation) {
          document.querySelectorAll('.Page_location').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocation.getAttribute('value');
            else
              item.textContent = inputLocation.textContent;
          });
          addGlow(document.querySelector('.Page_location'));
        }

        if(inputAiNodesTotal) {
          document.querySelectorAll('.Page_aiNodesTotal').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAiNodesTotal.getAttribute('value');
            else
              item.textContent = inputAiNodesTotal.textContent;
          });
          addGlow(document.querySelector('.Page_aiNodesTotal'));
        }

        if(inputGpuDevicesTotal) {
          document.querySelectorAll('.Page_gpuDevicesTotal').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGpuDevicesTotal.getAttribute('value');
            else
              item.textContent = inputGpuDevicesTotal.textContent;
          });
          addGlow(document.querySelector('.Page_gpuDevicesTotal'));
        }

        if(inputVmsTotal) {
          document.querySelectorAll('.Page_vmsTotal').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputVmsTotal.getAttribute('value');
            else
              item.textContent = inputVmsTotal.textContent;
          });
          addGlow(document.querySelector('.Page_vmsTotal'));
        }

        if(inputGrafanaUrl) {
          document.querySelectorAll('.Page_grafanaUrl').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGrafanaUrl.getAttribute('value');
            else
              item.textContent = inputGrafanaUrl.textContent;
          });
          addGlow(document.querySelector('.Page_grafanaUrl'));
        }

        if(inputCpuCoresTotal) {
          document.querySelectorAll('.Page_cpuCoresTotal').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCpuCoresTotal.getAttribute('value');
            else
              item.textContent = inputCpuCoresTotal.textContent;
          });
          addGlow(document.querySelector('.Page_cpuCoresTotal'));
        }

        if(inputMemoryBytesTotal) {
          document.querySelectorAll('.Page_memoryBytesTotal').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMemoryBytesTotal.getAttribute('value');
            else
              item.textContent = inputMemoryBytesTotal.textContent;
          });
          addGlow(document.querySelector('.Page_memoryBytesTotal'));
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

        if(inputNgsildTenant) {
          document.querySelectorAll('.Page_ngsildTenant').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildTenant.getAttribute('value');
            else
              item.textContent = inputNgsildTenant.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildTenant'));
        }

        if(inputNgsildPath) {
          document.querySelectorAll('.Page_ngsildPath').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildPath.getAttribute('value');
            else
              item.textContent = inputNgsildPath.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildPath'));
        }

        if(inputNgsildContext) {
          document.querySelectorAll('.Page_ngsildContext').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildContext.getAttribute('value');
            else
              item.textContent = inputNgsildContext.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildContext'));
        }

        if(inputNgsildData) {
          document.querySelectorAll('.Page_ngsildData').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildData.getAttribute('value');
            else
              item.textContent = inputNgsildData.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildData'));
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

        if(inputHubResource) {
          document.querySelectorAll('.Page_hubResource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputHubResource.getAttribute('value');
            else
              item.textContent = inputHubResource.textContent;
          });
          addGlow(document.querySelector('.Page_hubResource'));
        }

        if(inputClusterResource) {
          document.querySelectorAll('.Page_clusterResource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClusterResource.getAttribute('value');
            else
              item.textContent = inputClusterResource.textContent;
          });
          addGlow(document.querySelector('.Page_clusterResource'));
        }

        if(inputLocationColors) {
          document.querySelectorAll('.Page_locationColors').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationColors.getAttribute('value');
            else
              item.textContent = inputLocationColors.textContent;
          });
          addGlow(document.querySelector('.Page_locationColors'));
        }

        if(inputLocationTitles) {
          document.querySelectorAll('.Page_locationTitles').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationTitles.getAttribute('value');
            else
              item.textContent = inputLocationTitles.textContent;
          });
          addGlow(document.querySelector('.Page_locationTitles'));
        }

        if(inputLocationLinks) {
          document.querySelectorAll('.Page_locationLinks').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocationLinks.getAttribute('value');
            else
              item.textContent = inputLocationLinks.textContent;
          });
          addGlow(document.querySelector('.Page_locationLinks'));
        }

          pageGraphCluster();
      });
    });
  }
}

function pageGraphCluster(apiRequest) {
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
          layout['title'] = 'OpenShift clusters';
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
          Plotly.react('htmBodyGraphClusterPage', data, layout);
        }
      }
    }

    // Graph Location
    window.mapLayers = {};
    window.bounds = null;
    if(listCluster.filter(o => o.location)) {
      window.bounds = L.latLngBounds(listCluster.filter(o => o.location).map((c) => {
        return [c.location.coordinates[1], c.location.coordinates[0]];
      }));
    }
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipCluster(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapCluster) {
      window.geoJSONCluster.clearLayers();
      window.listCluster.forEach((result, index) => {
        if(result.location) {
          var shapes = [];
          if(Array.isArray(result.location))
            shapes = shapes.concat(result.location);
          else
            shapes.push(result.location);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layerGeoJson = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleCluster
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleCluster(feature));
              }
            });
            window.geoJSONCluster.addLayer(layerGeoJson);
          });
        }
      });
    } else if(document.getElementById('htmBodyGraphLocationClusterPage')) {
      window.mapCluster = L.map('htmBodyGraphLocationClusterPage', {
        position: 'topright'
        , zoomControl: true
        , scrollWheelZoom: true
        , closePopupOnClick: false
        , contextmenu: true
        , contextmenuWidth: 140
        , contextmenuItems: [
          {
            text: 'Show coordinates'
            , callback: function(event) {
              alert(event.latlng);
            }
          }
          ]
      });
      window.mapCluster.zoomControl.setPosition('topright');
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendCluster;
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapCluster);

      if(window.bounds && window['DEFAULT_MAP_ZOOM'] && window.bounds.getNorthEast()) {
        if(listCluster.length == 1) {
          window.mapCluster.setView(window.bounds.getNorthEast(), window['DEFAULT_MAP_ZOOM']);
        } else {
          window.mapCluster.fitBounds(window.bounds);
        }
      } else {
        if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
          window.mapCluster.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]], window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_ZOOM'])
          window.mapCluster.setView(null, window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_LOCATION'])
          window.mapCluster.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]]);
      }

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONCluster = L.geoJSON().addTo(window.mapCluster);
      window.listCluster.forEach((result, index) => {
        if(result.location) {
          var shapes = [];
          if(Array.isArray(result.location))
            shapes = shapes.concat(result.location);
          else
            shapes.push(result.location);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layerGeoJson = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleCluster
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleCluster(feature));
              }
            });
            window.geoJSONCluster.addLayer(layerGeoJson);
          });
        }
      });
      window.mapCluster.on('popupopen', function(e) {
        if(e.popup._source) {
          var feature = e.popup._source.feature;
          jsTooltipCluster(e, feature);
        }
      });
      const drawnItems = new L.FeatureGroup();
      window.mapCluster.addLayer(drawnItems);
      const drawControl = new L.Control.Draw({
        position: 'topright'
        , edit: {
          featureGroup: drawnItems
        }
        , draw: {
          polygon: true
          , polyline: true
          , rectangle: true
          , circle: true
          , marker: true
        }
      });
      window.mapCluster.addControl(drawControl);
      window.mapCluster.on(L.Draw.Event.CREATED, function (event) {
        drawnItems.addLayer(event.layer);
        var contextmenuItems = [];
        if(event.layerType == 'marker') {
          contextmenuItems.push({
            text: 'Set location of ' + result.objectTitle
            , callback: function(event2) {
              patchClusterLocation(event.layer, { coordinates: [event.layer.getLatLng()['lng'], event.layer.getLatLng()['lat']], type: "Point" });
            }
          });
        }
        event.layer.bindContextMenu({
          contextmenu: true
          , contextmenuItems: contextmenuItems
        });
      });
    }
  }
}
function patchClusterLocation(target, location) {
  patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + result.clusterResource }]
      , 'setLocation', location
      , target
      , function(response, e) { addGlow(target); }
      , function(response, e) { addError(target); }
      );
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqCluster_time').innerText = '';
  searchPage('Cluster', function() {
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
      document.querySelector('#fqCluster_time').value = x;
      document.querySelector('#fqCluster_time').onchange();
      searchPage('Cluster');
    }, speedRate);
  });
}

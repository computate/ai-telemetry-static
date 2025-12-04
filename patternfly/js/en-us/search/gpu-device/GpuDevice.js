
// Search //

async function searchGpuDevice($formFilters, success, error) {
  var filters = searchGpuDeviceFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchGpuDeviceVals(filters, target, success, error);
}

function searchGpuDeviceFilters($formFilters) {
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

    var filterNodeName = $formFilters.querySelector('.valueNodeName')?.value;
    if(filterNodeName != null && filterNodeName !== '')
      filters.push({ name: 'fq', value: 'nodeName:' + filterNodeName });

    var filterGpuDeviceNumber = $formFilters.querySelector('.valueGpuDeviceNumber')?.value;
    if(filterGpuDeviceNumber != null && filterGpuDeviceNumber !== '')
      filters.push({ name: 'fq', value: 'gpuDeviceNumber:' + filterGpuDeviceNumber });

    var filterModelName = $formFilters.querySelector('.valueModelName')?.value;
    if(filterModelName != null && filterModelName !== '')
      filters.push({ name: 'fq', value: 'modelName:' + filterModelName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterGpuDeviceUtilization = $formFilters.querySelector('.valueGpuDeviceUtilization')?.value;
    if(filterGpuDeviceUtilization != null && filterGpuDeviceUtilization !== '')
      filters.push({ name: 'fq', value: 'gpuDeviceUtilization:' + filterGpuDeviceUtilization });

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

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

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

    var filterNodeResource = $formFilters.querySelector('.valueNodeResource')?.value;
    if(filterNodeResource != null && filterNodeResource !== '')
      filters.push({ name: 'fq', value: 'nodeResource:' + filterNodeResource });

    var filterGpuDeviceResource = $formFilters.querySelector('.valueGpuDeviceResource')?.value;
    if(filterGpuDeviceResource != null && filterGpuDeviceResource !== '')
      filters.push({ name: 'fq', value: 'gpuDeviceResource:' + filterGpuDeviceResource });

    var filterGpuDeviceDisplayName = $formFilters.querySelector('.valueGpuDeviceDisplayName')?.value;
    if(filterGpuDeviceDisplayName != null && filterGpuDeviceDisplayName !== '')
      filters.push({ name: 'fq', value: 'gpuDeviceDisplayName:' + filterGpuDeviceDisplayName });

    var filterLocationColors = $formFilters.querySelector('.valueLocationColors')?.value;
    if(filterLocationColors != null && filterLocationColors !== '')
      filters.push({ name: 'fq', value: 'locationColors:' + filterLocationColors });

    var filterLocationTitles = $formFilters.querySelector('.valueLocationTitles')?.value;
    if(filterLocationTitles != null && filterLocationTitles !== '')
      filters.push({ name: 'fq', value: 'locationTitles:' + filterLocationTitles });

    var filterLocationLinks = $formFilters.querySelector('.valueLocationLinks')?.value;
    if(filterLocationLinks != null && filterLocationLinks !== '')
      filters.push({ name: 'fq', value: 'locationLinks:' + filterLocationLinks });

    var filterEntityShortId = $formFilters.querySelector('.valueEntityShortId')?.value;
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });
  }
  return filters;
}

function searchGpuDeviceVals(filters, target, success, error) {


  fetch(
    '/en-us/api/gpu-device?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestGpuDeviceHubResource(filters, $list, gpuDeviceResource = null, hubResource = null, relate=true, target) {
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
        var checked = val == null ? false : (Array.isArray(val) ? val.includes(gpuDeviceResource.toString()) : val == hubResource);
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_hubResource_' + gpuDeviceResource + '_hubResource_' + o['hubResource']);
        $input.setAttribute('name', 'hubResource');
        $input.setAttribute('value', o['hubResource']);
        $input.setAttribute('class', 'valueHubResource ');
        if(gpuDeviceResource != null) {
          $input.addEventListener('change', function(event) {
            patchGpuDeviceVals([{ name: 'fq', value: 'gpuDeviceResource:' + gpuDeviceResource }], { [(event.target.checked ? 'set' : 'remove') + 'HubResource']: o['hubResource'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestGpuDeviceHubResource(filters, $list, gpuDeviceResource, o['hubResource'], relate, target);
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

function suggestGpuDeviceClusterResource(filters, $list, gpuDeviceResource = null, clusterResource = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-regular fa-server"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = 
o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var val = o['clusterResource'];
        var checked = val == null ? false : (Array.isArray(val) ? val.includes(gpuDeviceResource.toString()) : val == clusterResource);
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_clusterResource_' + gpuDeviceResource + '_clusterResource_' + o['clusterResource']);
        $input.setAttribute('name', 'clusterResource');
        $input.setAttribute('value', o['clusterResource']);
        $input.setAttribute('class', 'valueClusterResource ');
        if(gpuDeviceResource != null) {
          $input.addEventListener('change', function(event) {
            patchGpuDeviceVals([{ name: 'fq', value: 'gpuDeviceResource:' + gpuDeviceResource }], { [(event.target.checked ? 'set' : 'remove') + 'ClusterResource']: o['clusterResource'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestGpuDeviceClusterResource(filters, $list, gpuDeviceResource, o['clusterResource'], relate, target);
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
  searchClusterVals(filters, target, success, error);
}

function suggestGpuDeviceNodeResource(filters, $list, gpuDeviceResource = null, nodeResource = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-regular fa-computer"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = 
o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var val = o['nodeResource'];
        var checked = val == null ? false : (Array.isArray(val) ? val.includes(gpuDeviceResource.toString()) : val == nodeResource);
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_nodeResource_' + gpuDeviceResource + '_nodeResource_' + o['nodeResource']);
        $input.setAttribute('name', 'nodeResource');
        $input.setAttribute('value', o['nodeResource']);
        $input.setAttribute('class', 'valueNodeResource ');
        if(gpuDeviceResource != null) {
          $input.addEventListener('change', function(event) {
            patchGpuDeviceVals([{ name: 'fq', value: 'gpuDeviceResource:' + gpuDeviceResource }], { [(event.target.checked ? 'set' : 'remove') + 'NodeResource']: o['nodeResource'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestGpuDeviceNodeResource(filters, $list, gpuDeviceResource, o['nodeResource'], relate, target);
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
  searchAiNodeVals(filters, target, success, error);
}

function suggestGpuDeviceObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-regular fa-memory"></i>');
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
  searchGpuDeviceVals($formFilters, target, success, error);
}

// GET //

async function getGpuDevice(pk) {
  fetch(
    '/en-us/api/gpu-device/' + gpuDeviceResource
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

async function patchGpuDevice($formFilters, $formValues, target, gpuDeviceResource, success, error) {
  var filters = patchGpuDeviceFilters($formFilters);

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

  var valueNodeName = $formValues.querySelector('.valueNodeName')?.value;
  var removeNodeName = $formValues.querySelector('.removeNodeName')?.value === 'true';
  var setNodeName = removeNodeName ? null : $formValues.querySelector('.setNodeName')?.value;
  var addNodeName = $formValues.querySelector('.addNodeName')?.value;
  if(removeNodeName || setNodeName != null && setNodeName !== '')
    vals['setNodeName'] = setNodeName;
  if(addNodeName != null && addNodeName !== '')
    vals['addNodeName'] = addNodeName;
  var removeNodeName = $formValues.querySelector('.removeNodeName')?.value;
  if(removeNodeName != null && removeNodeName !== '')
    vals['removeNodeName'] = removeNodeName;

  var valueGpuDeviceNumber = $formValues.querySelector('.valueGpuDeviceNumber')?.value;
  var removeGpuDeviceNumber = $formValues.querySelector('.removeGpuDeviceNumber')?.value === 'true';
  var setGpuDeviceNumber = removeGpuDeviceNumber ? null : $formValues.querySelector('.setGpuDeviceNumber')?.value;
  var addGpuDeviceNumber = $formValues.querySelector('.addGpuDeviceNumber')?.value;
  if(removeGpuDeviceNumber || setGpuDeviceNumber != null && setGpuDeviceNumber !== '')
    vals['setGpuDeviceNumber'] = setGpuDeviceNumber;
  if(addGpuDeviceNumber != null && addGpuDeviceNumber !== '')
    vals['addGpuDeviceNumber'] = addGpuDeviceNumber;
  var removeGpuDeviceNumber = $formValues.querySelector('.removeGpuDeviceNumber')?.value;
  if(removeGpuDeviceNumber != null && removeGpuDeviceNumber !== '')
    vals['removeGpuDeviceNumber'] = removeGpuDeviceNumber;

  var valueModelName = $formValues.querySelector('.valueModelName')?.value;
  var removeModelName = $formValues.querySelector('.removeModelName')?.value === 'true';
  var setModelName = removeModelName ? null : $formValues.querySelector('.setModelName')?.value;
  var addModelName = $formValues.querySelector('.addModelName')?.value;
  if(removeModelName || setModelName != null && setModelName !== '')
    vals['setModelName'] = setModelName;
  if(addModelName != null && addModelName !== '')
    vals['addModelName'] = addModelName;
  var removeModelName = $formValues.querySelector('.removeModelName')?.value;
  if(removeModelName != null && removeModelName !== '')
    vals['removeModelName'] = removeModelName;

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

  var valueGpuDeviceUtilization = $formValues.querySelector('.valueGpuDeviceUtilization')?.value;
  var removeGpuDeviceUtilization = $formValues.querySelector('.removeGpuDeviceUtilization')?.value === 'true';
  var setGpuDeviceUtilization = removeGpuDeviceUtilization ? null : $formValues.querySelector('.setGpuDeviceUtilization')?.value;
  var addGpuDeviceUtilization = $formValues.querySelector('.addGpuDeviceUtilization')?.value;
  if(removeGpuDeviceUtilization || setGpuDeviceUtilization != null && setGpuDeviceUtilization !== '')
    vals['setGpuDeviceUtilization'] = setGpuDeviceUtilization;
  if(addGpuDeviceUtilization != null && addGpuDeviceUtilization !== '')
    vals['addGpuDeviceUtilization'] = addGpuDeviceUtilization;
  var removeGpuDeviceUtilization = $formValues.querySelector('.removeGpuDeviceUtilization')?.value;
  if(removeGpuDeviceUtilization != null && removeGpuDeviceUtilization !== '')
    vals['removeGpuDeviceUtilization'] = removeGpuDeviceUtilization;

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

  var valueClusterResource = (Array.from($formValues.querySelectorAll('.valueClusterResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueClusterResource != null && valueClusterResource !== '')
    vals['setClusterResource'] = valueClusterResource;

  var valueNodeResource = (Array.from($formValues.querySelectorAll('.valueNodeResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueNodeResource != null && valueNodeResource !== '')
    vals['setNodeResource'] = valueNodeResource;

  var valueGpuDeviceResource = $formValues.querySelector('.valueGpuDeviceResource')?.value;
  var removeGpuDeviceResource = $formValues.querySelector('.removeGpuDeviceResource')?.value === 'true';
  var setGpuDeviceResource = removeGpuDeviceResource ? null : $formValues.querySelector('.setGpuDeviceResource')?.value;
  var addGpuDeviceResource = $formValues.querySelector('.addGpuDeviceResource')?.value;
  if(removeGpuDeviceResource || setGpuDeviceResource != null && setGpuDeviceResource !== '')
    vals['setGpuDeviceResource'] = setGpuDeviceResource;
  if(addGpuDeviceResource != null && addGpuDeviceResource !== '')
    vals['addGpuDeviceResource'] = addGpuDeviceResource;
  var removeGpuDeviceResource = $formValues.querySelector('.removeGpuDeviceResource')?.value;
  if(removeGpuDeviceResource != null && removeGpuDeviceResource !== '')
    vals['removeGpuDeviceResource'] = removeGpuDeviceResource;

  patchGpuDeviceVals(gpuDeviceResource == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'gpuDeviceResource:' + gpuDeviceResource}], vals, target, success, error);
}

function patchGpuDeviceFilters($formFilters) {
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

    var filterNodeName = $formFilters.querySelector('.valueNodeName')?.value;
    if(filterNodeName != null && filterNodeName !== '')
      filters.push({ name: 'fq', value: 'nodeName:' + filterNodeName });

    var filterGpuDeviceNumber = $formFilters.querySelector('.valueGpuDeviceNumber')?.value;
    if(filterGpuDeviceNumber != null && filterGpuDeviceNumber !== '')
      filters.push({ name: 'fq', value: 'gpuDeviceNumber:' + filterGpuDeviceNumber });

    var filterModelName = $formFilters.querySelector('.valueModelName')?.value;
    if(filterModelName != null && filterModelName !== '')
      filters.push({ name: 'fq', value: 'modelName:' + filterModelName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterGpuDeviceUtilization = $formFilters.querySelector('.valueGpuDeviceUtilization')?.value;
    if(filterGpuDeviceUtilization != null && filterGpuDeviceUtilization !== '')
      filters.push({ name: 'fq', value: 'gpuDeviceUtilization:' + filterGpuDeviceUtilization });

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

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

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

    var filterNodeResource = $formFilters.querySelector('.valueNodeResource')?.value;
    if(filterNodeResource != null && filterNodeResource !== '')
      filters.push({ name: 'fq', value: 'nodeResource:' + filterNodeResource });

    var filterGpuDeviceResource = $formFilters.querySelector('.valueGpuDeviceResource')?.value;
    if(filterGpuDeviceResource != null && filterGpuDeviceResource !== '')
      filters.push({ name: 'fq', value: 'gpuDeviceResource:' + filterGpuDeviceResource });

    var filterGpuDeviceDisplayName = $formFilters.querySelector('.valueGpuDeviceDisplayName')?.value;
    if(filterGpuDeviceDisplayName != null && filterGpuDeviceDisplayName !== '')
      filters.push({ name: 'fq', value: 'gpuDeviceDisplayName:' + filterGpuDeviceDisplayName });

    var filterLocationColors = $formFilters.querySelector('.valueLocationColors')?.value;
    if(filterLocationColors != null && filterLocationColors !== '')
      filters.push({ name: 'fq', value: 'locationColors:' + filterLocationColors });

    var filterLocationTitles = $formFilters.querySelector('.valueLocationTitles')?.value;
    if(filterLocationTitles != null && filterLocationTitles !== '')
      filters.push({ name: 'fq', value: 'locationTitles:' + filterLocationTitles });

    var filterLocationLinks = $formFilters.querySelector('.valueLocationLinks')?.value;
    if(filterLocationLinks != null && filterLocationLinks !== '')
      filters.push({ name: 'fq', value: 'locationLinks:' + filterLocationLinks });

    var filterEntityShortId = $formFilters.querySelector('.valueEntityShortId')?.value;
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });
  }
  return filters;
}

function patchGpuDeviceVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchGpuDeviceVals(filters, vals, target, success, error);
}

function patchGpuDeviceVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/gpu-device?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postGpuDevice($formValues, target, success, error) {
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

  var valueNodeName = $formValues.querySelector('.valueNodeName')?.value;
  if(valueNodeName != null && valueNodeName !== '')
    vals['nodeName'] = valueNodeName;

  var valueGpuDeviceNumber = $formValues.querySelector('.valueGpuDeviceNumber')?.value;
  if(valueGpuDeviceNumber != null && valueGpuDeviceNumber !== '')
    vals['gpuDeviceNumber'] = valueGpuDeviceNumber;

  var valueModelName = $formValues.querySelector('.valueModelName')?.value;
  if(valueModelName != null && valueModelName !== '')
    vals['modelName'] = valueModelName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueGpuDeviceUtilization = $formValues.querySelector('.valueGpuDeviceUtilization')?.value;
  if(valueGpuDeviceUtilization != null && valueGpuDeviceUtilization !== '')
    vals['gpuDeviceUtilization'] = valueGpuDeviceUtilization;

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

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

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

  var valueClusterResource = (Array.from($formValues.querySelectorAll('.valueClusterResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueClusterResource != null && valueClusterResource !== '')
    vals['clusterResource'] = valueClusterResource;

  var valueNodeResource = (Array.from($formValues.querySelectorAll('.valueNodeResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueNodeResource != null && valueNodeResource !== '')
    vals['nodeResource'] = valueNodeResource;

  var valueGpuDeviceResource = $formValues.querySelector('.valueGpuDeviceResource')?.value;
  if(valueGpuDeviceResource != null && valueGpuDeviceResource !== '')
    vals['gpuDeviceResource'] = valueGpuDeviceResource;

  fetch(
    '/en-us/api/gpu-device'
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

function postGpuDeviceVals(vals, target, success, error) {
  fetch(
    '/en-us/api/gpu-device'
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

async function deleteGpuDevice(target, gpuDeviceResource, success, error) {
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
    '/en-us/api/gpu-device/' + encodeURIComponent(gpuDeviceResource)
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

async function putimportGpuDevice($formValues, target, gpuDeviceResource, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportGpuDeviceVals(JSON.parse(json), target, success, error);
}

function putimportGpuDeviceVals(json, target, success, error) {
  fetch(
    '/en-us/api/gpu-device-import'
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

async function deletefilterGpuDevice(target, success, error) {
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
    '/en-us/api/gpu-device'
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

async function websocketGpuDevice(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketGpuDevice', function (error, message) {
      var json = JSON.parse(message['body']);
      var gpuDeviceResource = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + gpuDeviceResource + ' ');
      $box.setAttribute('id', 'box-' + gpuDeviceResource);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + gpuDeviceResource);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + gpuDeviceResource);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + gpuDeviceResource);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-regular fa-memory"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify GPU devices in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + gpuDeviceResource + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + gpuDeviceResource);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + gpuDeviceResource);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + gpuDeviceResource);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + gpuDeviceResource);
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
        var $old_box = document.querySelector('.box-' + gpuDeviceResource);
      } else {
        document.querySelector('.box-' + gpuDeviceResource)?.remove();
      }
      if(gpuDeviceResource) {
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

    window.eventBus.registerHandler('websocketCluster', function (error, message) {
      document.querySelector('.Page_clusterResource').trigger('oninput');
      document.querySelector('.Page_clusterResource_add').innerText = 'add an OpenShift cluster';
      document.querySelector('.Page_clusterResource_add').classList.remove('w3-disabled');
      document.querySelector('.Page_clusterResource_add').setAttribute('disabled', false);
    });

    window.eventBus.registerHandler('websocketAiNode', function (error, message) {
      document.querySelector('.Page_nodeResource').trigger('oninput');
      document.querySelector('.Page_nodeResource_add').innerText = 'add an AI node';
      document.querySelector('.Page_nodeResource_add').classList.remove('w3-disabled');
      document.querySelector('.Page_nodeResource_add').setAttribute('disabled', false);
    });
  }
}
async function websocketGpuDeviceInner(apiRequest) {
  var gpuDeviceResource = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(gpuDeviceResource != null && vars.length > 0) {
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
        var inputNodeName = null;
        var inputGpuDeviceNumber = null;
        var inputModelName = null;
        var inputDescription = null;
        var inputGpuDeviceUtilization = null;
        var inputId = null;
        var inputNgsildTenant = null;
        var inputNgsildPath = null;
        var inputNgsildContext = null;
        var inputNgsildData = null;
        var inputLocation = null;
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
        var inputNodeResource = null;
        var inputGpuDeviceResource = null;
        var inputGpuDeviceDisplayName = null;
        var inputLocationColors = null;
        var inputLocationTitles = null;
        var inputLocationLinks = null;
        var inputEntityShortId = null;

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
        if(vars.includes('nodeName'))
          inputNodeName = $response.querySelector('.Page_nodeName');
        if(vars.includes('gpuDeviceNumber'))
          inputGpuDeviceNumber = $response.querySelector('.Page_gpuDeviceNumber');
        if(vars.includes('modelName'))
          inputModelName = $response.querySelector('.Page_modelName');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.Page_description');
        if(vars.includes('gpuDeviceUtilization'))
          inputGpuDeviceUtilization = $response.querySelector('.Page_gpuDeviceUtilization');
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
        if(vars.includes('location'))
          inputLocation = $response.querySelector('.Page_location');
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
        if(vars.includes('nodeResource'))
          inputNodeResource = $response.querySelector('.Page_nodeResource');
        if(vars.includes('gpuDeviceResource'))
          inputGpuDeviceResource = $response.querySelector('.Page_gpuDeviceResource');
        if(vars.includes('gpuDeviceDisplayName'))
          inputGpuDeviceDisplayName = $response.querySelector('.Page_gpuDeviceDisplayName');
        if(vars.includes('locationColors'))
          inputLocationColors = $response.querySelector('.Page_locationColors');
        if(vars.includes('locationTitles'))
          inputLocationTitles = $response.querySelector('.Page_locationTitles');
        if(vars.includes('locationLinks'))
          inputLocationLinks = $response.querySelector('.Page_locationLinks');
        if(vars.includes('entityShortId'))
          inputEntityShortId = $response.querySelector('.Page_entityShortId');

        jsWebsocketGpuDevice(gpuDeviceResource, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listGpuDevice = JSON.parse($response.querySelector('.pageForm .listGpuDevice')?.value);


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

        if(inputNodeName) {
          document.querySelectorAll('.Page_nodeName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNodeName.getAttribute('value');
            else
              item.textContent = inputNodeName.textContent;
          });
          addGlow(document.querySelector('.Page_nodeName'));
        }

        if(inputGpuDeviceNumber) {
          document.querySelectorAll('.Page_gpuDeviceNumber').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGpuDeviceNumber.getAttribute('value');
            else
              item.textContent = inputGpuDeviceNumber.textContent;
          });
          addGlow(document.querySelector('.Page_gpuDeviceNumber'));
        }

        if(inputModelName) {
          document.querySelectorAll('.Page_modelName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModelName.getAttribute('value');
            else
              item.textContent = inputModelName.textContent;
          });
          addGlow(document.querySelector('.Page_modelName'));
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

        if(inputGpuDeviceUtilization) {
          document.querySelectorAll('.Page_gpuDeviceUtilization').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGpuDeviceUtilization.getAttribute('value');
            else
              item.textContent = inputGpuDeviceUtilization.textContent;
          });
          addGlow(document.querySelector('.Page_gpuDeviceUtilization'));
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

        if(inputLocation) {
          document.querySelectorAll('.Page_location').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocation.getAttribute('value');
            else
              item.textContent = inputLocation.textContent;
          });
          addGlow(document.querySelector('.Page_location'));
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

        if(inputNodeResource) {
          document.querySelectorAll('.Page_nodeResource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNodeResource.getAttribute('value');
            else
              item.textContent = inputNodeResource.textContent;
          });
          addGlow(document.querySelector('.Page_nodeResource'));
        }

        if(inputGpuDeviceResource) {
          document.querySelectorAll('.Page_gpuDeviceResource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGpuDeviceResource.getAttribute('value');
            else
              item.textContent = inputGpuDeviceResource.textContent;
          });
          addGlow(document.querySelector('.Page_gpuDeviceResource'));
        }

        if(inputGpuDeviceDisplayName) {
          document.querySelectorAll('.Page_gpuDeviceDisplayName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGpuDeviceDisplayName.getAttribute('value');
            else
              item.textContent = inputGpuDeviceDisplayName.textContent;
          });
          addGlow(document.querySelector('.Page_gpuDeviceDisplayName'));
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

        if(inputEntityShortId) {
          document.querySelectorAll('.Page_entityShortId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEntityShortId.getAttribute('value');
            else
              item.textContent = inputEntityShortId.textContent;
          });
          addGlow(document.querySelector('.Page_entityShortId'));
        }

          pageGraphGpuDevice();
      });
    });
  }
}

function pageGraphGpuDevice(apiRequest) {
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
          layout['title'] = 'GPU devices';
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
          Plotly.react('htmBodyGraphGpuDevicePage', data, layout);
        }
      }
    }

    // Graph Location
    window.mapLayers = {};
    window.bounds = null;
    if(listGpuDevice.filter(o => o.location)) {
      window.bounds = L.latLngBounds(listGpuDevice.filter(o => o.location).map((c) => {
        return [c.location.coordinates[1], c.location.coordinates[0]];
      }));
    }
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipGpuDevice(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapGpuDevice) {
      window.geoJSONGpuDevice.clearLayers();
      window.listGpuDevice.forEach((result, index) => {
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
              , style: jsStyleGpuDevice
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleGpuDevice(feature));
              }
            });
            window.geoJSONGpuDevice.addLayer(layerGeoJson);
          });
        }
      });
    } else if(document.getElementById('htmBodyGraphLocationGpuDevicePage')) {
      window.mapGpuDevice = L.map('htmBodyGraphLocationGpuDevicePage', {
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
      window.mapGpuDevice.zoomControl.setPosition('topright');
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendGpuDevice;
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapGpuDevice);

      if(window.bounds && window['DEFAULT_MAP_ZOOM'] && window.bounds.getNorthEast()) {
        if(listGpuDevice.length == 1) {
          window.mapGpuDevice.setView(window.bounds.getNorthEast(), window['DEFAULT_MAP_ZOOM']);
        } else {
          window.mapGpuDevice.fitBounds(window.bounds);
        }
      } else {
        if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
          window.mapGpuDevice.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]], window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_ZOOM'])
          window.mapGpuDevice.setView(null, window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_LOCATION'])
          window.mapGpuDevice.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]]);
      }

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONGpuDevice = L.geoJSON().addTo(window.mapGpuDevice);
      window.listGpuDevice.forEach((result, index) => {
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
              , style: jsStyleGpuDevice
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleGpuDevice(feature));
              }
            });
            window.geoJSONGpuDevice.addLayer(layerGeoJson);
          });
        }
      });
      window.mapGpuDevice.on('popupopen', function(e) {
        if(e.popup._source) {
          var feature = e.popup._source.feature;
          jsTooltipGpuDevice(e, feature);
        }
      });
      const drawnItems = new L.FeatureGroup();
      window.mapGpuDevice.addLayer(drawnItems);
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
      window.mapGpuDevice.addControl(drawControl);
      window.mapGpuDevice.on(L.Draw.Event.CREATED, function (event) {
        drawnItems.addLayer(event.layer);
        var contextmenuItems = [];
        if(event.layerType == 'marker') {
          contextmenuItems.push({
            text: 'Set location of ' + result.objectTitle
            , callback: function(event2) {
              patchGpuDeviceLocation(event.layer, { coordinates: [event.layer.getLatLng()['lng'], event.layer.getLatLng()['lat']], type: "Point" });
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
function patchGpuDeviceLocation(target, location) {
  patchGpuDeviceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'gpuDeviceResource:' + result.gpuDeviceResource }]
      , 'setLocation', location
      , target
      , function(response, e) { addGlow(target); }
      , function(response, e) { addError(target); }
      );
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqGpuDevice_time').innerText = '';
  searchPage('GpuDevice', function() {
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
      document.querySelector('#fqGpuDevice_time').value = x;
      document.querySelector('#fqGpuDevice_time').onchange();
      searchPage('GpuDevice');
    }, speedRate);
  });
}

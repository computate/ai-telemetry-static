
// Search //

async function searchBareMetalNode($formFilters, success, error) {
  var filters = searchBareMetalNodeFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchBareMetalNodeVals(filters, target, success, error);
}

function searchBareMetalNodeFilters($formFilters) {
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

    var filterLeaseInfo = $formFilters.querySelector('.valueLeaseInfo')?.value;
    if(filterLeaseInfo != null && filterLeaseInfo !== '')
      filters.push({ name: 'fq', value: 'leaseInfo:' + filterLeaseInfo });

    var filterNetworkInfo = $formFilters.querySelector('.valueNetworkInfo')?.value;
    if(filterNetworkInfo != null && filterNetworkInfo !== '')
      filters.push({ name: 'fq', value: 'networkInfo:' + filterNetworkInfo });

    var filterNodeId = $formFilters.querySelector('.valueNodeId')?.value;
    if(filterNodeId != null && filterNodeId !== '')
      filters.push({ name: 'fq', value: 'nodeId:' + filterNodeId });

    var filterNodeIsMaintenance = $formFilters.querySelector('.valueNodeIsMaintenance')?.value;
    if(filterNodeIsMaintenance != null && filterNodeIsMaintenance !== '')
      filters.push({ name: 'fq', value: 'nodeIsMaintenance:' + filterNodeIsMaintenance });

    var filterNodeLinks = $formFilters.querySelector('.valueNodeLinks')?.value;
    if(filterNodeLinks != null && filterNodeLinks !== '')
      filters.push({ name: 'fq', value: 'nodeLinks:' + filterNodeLinks });

    var filterNodeName = $formFilters.querySelector('.valueNodeName')?.value;
    if(filterNodeName != null && filterNodeName !== '')
      filters.push({ name: 'fq', value: 'nodeName:' + filterNodeName });

    var filterNodePowerState = $formFilters.querySelector('.valueNodePowerState')?.value;
    if(filterNodePowerState != null && filterNodePowerState !== '')
      filters.push({ name: 'fq', value: 'nodePowerState:' + filterNodePowerState });

    var filterNodeProvisionState = $formFilters.querySelector('.valueNodeProvisionState')?.value;
    if(filterNodeProvisionState != null && filterNodeProvisionState !== '')
      filters.push({ name: 'fq', value: 'nodeProvisionState:' + filterNodeProvisionState });

    var filterNodeResourceClass = $formFilters.querySelector('.valueNodeResourceClass')?.value;
    if(filterNodeResourceClass != null && filterNodeResourceClass !== '')
      filters.push({ name: 'fq', value: 'nodeResourceClass:' + filterNodeResourceClass });

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

function searchBareMetalNodeVals(filters, target, success, error) {

  fetch(
    '/en-us/api/bare-metal-node?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestBareMetalNodeObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-regular fa-hexagon-nodes"></i>');
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
  searchBareMetalNodeVals($formFilters, target, success, error);
}

// GET //

async function getBareMetalNode(pk) {
  fetch(
    '/en-us/api/bare-metal-node/' + nodeId
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

async function patchBareMetalNode($formFilters, $formValues, target, nodeId, success, error) {
  var filters = patchBareMetalNodeFilters($formFilters);

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

  var valueLeaseInfo = $formValues.querySelector('.valueLeaseInfo')?.value;
  var removeLeaseInfo = $formValues.querySelector('.removeLeaseInfo')?.value === 'true';
  var setLeaseInfo = removeLeaseInfo ? null : $formValues.querySelector('.setLeaseInfo')?.value;
  var addLeaseInfo = $formValues.querySelector('.addLeaseInfo')?.value;
  if(removeLeaseInfo || setLeaseInfo != null && setLeaseInfo !== '')
    vals['setLeaseInfo'] = JSON.parse(setLeaseInfo);
  if(addLeaseInfo != null && addLeaseInfo !== '')
    vals['addLeaseInfo'] = addLeaseInfo;
  var removeLeaseInfo = $formValues.querySelector('.removeLeaseInfo')?.value;
  if(removeLeaseInfo != null && removeLeaseInfo !== '')
    vals['removeLeaseInfo'] = removeLeaseInfo;

  var valueNetworkInfo = $formValues.querySelector('.valueNetworkInfo')?.value;
  var removeNetworkInfo = $formValues.querySelector('.removeNetworkInfo')?.value === 'true';
  var setNetworkInfo = removeNetworkInfo ? null : $formValues.querySelector('.setNetworkInfo')?.value;
  var addNetworkInfo = $formValues.querySelector('.addNetworkInfo')?.value;
  if(removeNetworkInfo || setNetworkInfo != null && setNetworkInfo !== '')
    vals['setNetworkInfo'] = JSON.parse(setNetworkInfo);
  if(addNetworkInfo != null && addNetworkInfo !== '')
    vals['addNetworkInfo'] = addNetworkInfo;
  var removeNetworkInfo = $formValues.querySelector('.removeNetworkInfo')?.value;
  if(removeNetworkInfo != null && removeNetworkInfo !== '')
    vals['removeNetworkInfo'] = removeNetworkInfo;

  var valueNodeId = $formValues.querySelector('.valueNodeId')?.value;
  var removeNodeId = $formValues.querySelector('.removeNodeId')?.value === 'true';
  var setNodeId = removeNodeId ? null : $formValues.querySelector('.setNodeId')?.value;
  var addNodeId = $formValues.querySelector('.addNodeId')?.value;
  if(removeNodeId || setNodeId != null && setNodeId !== '')
    vals['setNodeId'] = setNodeId;
  if(addNodeId != null && addNodeId !== '')
    vals['addNodeId'] = addNodeId;
  var removeNodeId = $formValues.querySelector('.removeNodeId')?.value;
  if(removeNodeId != null && removeNodeId !== '')
    vals['removeNodeId'] = removeNodeId;

  var valueNodeIsMaintenance = $formValues.querySelector('.valueNodeIsMaintenance')?.value;
  var removeNodeIsMaintenance = $formValues.querySelector('.removeNodeIsMaintenance')?.value === 'true';
  var setNodeIsMaintenance = removeNodeIsMaintenance ? null : $formValues.querySelector('.setNodeIsMaintenance')?.value;
  var addNodeIsMaintenance = $formValues.querySelector('.addNodeIsMaintenance')?.value;
  if(removeNodeIsMaintenance || setNodeIsMaintenance != null && setNodeIsMaintenance !== '')
    vals['setNodeIsMaintenance'] = setNodeIsMaintenance;
  if(addNodeIsMaintenance != null && addNodeIsMaintenance !== '')
    vals['addNodeIsMaintenance'] = addNodeIsMaintenance;
  var removeNodeIsMaintenance = $formValues.querySelector('.removeNodeIsMaintenance')?.value;
  if(removeNodeIsMaintenance != null && removeNodeIsMaintenance !== '')
    vals['removeNodeIsMaintenance'] = removeNodeIsMaintenance;

  var valueNodeLinks = $formValues.querySelector('.valueNodeLinks')?.value;
  var removeNodeLinks = $formValues.querySelector('.removeNodeLinks')?.value === 'true';
  var setNodeLinks = removeNodeLinks ? null : $formValues.querySelector('.setNodeLinks')?.value;
  var addNodeLinks = $formValues.querySelector('.addNodeLinks')?.value;
  if(removeNodeLinks || setNodeLinks != null && setNodeLinks !== '')
    vals['setNodeLinks'] = JSON.parse(setNodeLinks);
  if(addNodeLinks != null && addNodeLinks !== '')
    vals['addNodeLinks'] = addNodeLinks;
  var removeNodeLinks = $formValues.querySelector('.removeNodeLinks')?.value;
  if(removeNodeLinks != null && removeNodeLinks !== '')
    vals['removeNodeLinks'] = removeNodeLinks;

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

  var valueNodePowerState = $formValues.querySelector('.valueNodePowerState')?.value;
  var removeNodePowerState = $formValues.querySelector('.removeNodePowerState')?.value === 'true';
  var setNodePowerState = removeNodePowerState ? null : $formValues.querySelector('.setNodePowerState')?.value;
  var addNodePowerState = $formValues.querySelector('.addNodePowerState')?.value;
  if(removeNodePowerState || setNodePowerState != null && setNodePowerState !== '')
    vals['setNodePowerState'] = setNodePowerState;
  if(addNodePowerState != null && addNodePowerState !== '')
    vals['addNodePowerState'] = addNodePowerState;
  var removeNodePowerState = $formValues.querySelector('.removeNodePowerState')?.value;
  if(removeNodePowerState != null && removeNodePowerState !== '')
    vals['removeNodePowerState'] = removeNodePowerState;

  var valueNodeProvisionState = $formValues.querySelector('.valueNodeProvisionState')?.value;
  var removeNodeProvisionState = $formValues.querySelector('.removeNodeProvisionState')?.value === 'true';
  var setNodeProvisionState = removeNodeProvisionState ? null : $formValues.querySelector('.setNodeProvisionState')?.value;
  var addNodeProvisionState = $formValues.querySelector('.addNodeProvisionState')?.value;
  if(removeNodeProvisionState || setNodeProvisionState != null && setNodeProvisionState !== '')
    vals['setNodeProvisionState'] = setNodeProvisionState;
  if(addNodeProvisionState != null && addNodeProvisionState !== '')
    vals['addNodeProvisionState'] = addNodeProvisionState;
  var removeNodeProvisionState = $formValues.querySelector('.removeNodeProvisionState')?.value;
  if(removeNodeProvisionState != null && removeNodeProvisionState !== '')
    vals['removeNodeProvisionState'] = removeNodeProvisionState;

  var valueNodeResourceClass = $formValues.querySelector('.valueNodeResourceClass')?.value;
  var removeNodeResourceClass = $formValues.querySelector('.removeNodeResourceClass')?.value === 'true';
  var setNodeResourceClass = removeNodeResourceClass ? null : $formValues.querySelector('.setNodeResourceClass')?.value;
  var addNodeResourceClass = $formValues.querySelector('.addNodeResourceClass')?.value;
  if(removeNodeResourceClass || setNodeResourceClass != null && setNodeResourceClass !== '')
    vals['setNodeResourceClass'] = setNodeResourceClass;
  if(addNodeResourceClass != null && addNodeResourceClass !== '')
    vals['addNodeResourceClass'] = addNodeResourceClass;
  var removeNodeResourceClass = $formValues.querySelector('.removeNodeResourceClass')?.value;
  if(removeNodeResourceClass != null && removeNodeResourceClass !== '')
    vals['removeNodeResourceClass'] = removeNodeResourceClass;

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

  patchBareMetalNodeVals(nodeId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'nodeId:' + nodeId}], vals, target, success, error);
}

function patchBareMetalNodeFilters($formFilters) {
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

    var filterLeaseInfo = $formFilters.querySelector('.valueLeaseInfo')?.value;
    if(filterLeaseInfo != null && filterLeaseInfo !== '')
      filters.push({ name: 'fq', value: 'leaseInfo:' + filterLeaseInfo });

    var filterNetworkInfo = $formFilters.querySelector('.valueNetworkInfo')?.value;
    if(filterNetworkInfo != null && filterNetworkInfo !== '')
      filters.push({ name: 'fq', value: 'networkInfo:' + filterNetworkInfo });

    var filterNodeId = $formFilters.querySelector('.valueNodeId')?.value;
    if(filterNodeId != null && filterNodeId !== '')
      filters.push({ name: 'fq', value: 'nodeId:' + filterNodeId });

    var filterNodeIsMaintenance = $formFilters.querySelector('.valueNodeIsMaintenance')?.value;
    if(filterNodeIsMaintenance != null && filterNodeIsMaintenance !== '')
      filters.push({ name: 'fq', value: 'nodeIsMaintenance:' + filterNodeIsMaintenance });

    var filterNodeLinks = $formFilters.querySelector('.valueNodeLinks')?.value;
    if(filterNodeLinks != null && filterNodeLinks !== '')
      filters.push({ name: 'fq', value: 'nodeLinks:' + filterNodeLinks });

    var filterNodeName = $formFilters.querySelector('.valueNodeName')?.value;
    if(filterNodeName != null && filterNodeName !== '')
      filters.push({ name: 'fq', value: 'nodeName:' + filterNodeName });

    var filterNodePowerState = $formFilters.querySelector('.valueNodePowerState')?.value;
    if(filterNodePowerState != null && filterNodePowerState !== '')
      filters.push({ name: 'fq', value: 'nodePowerState:' + filterNodePowerState });

    var filterNodeProvisionState = $formFilters.querySelector('.valueNodeProvisionState')?.value;
    if(filterNodeProvisionState != null && filterNodeProvisionState !== '')
      filters.push({ name: 'fq', value: 'nodeProvisionState:' + filterNodeProvisionState });

    var filterNodeResourceClass = $formFilters.querySelector('.valueNodeResourceClass')?.value;
    if(filterNodeResourceClass != null && filterNodeResourceClass !== '')
      filters.push({ name: 'fq', value: 'nodeResourceClass:' + filterNodeResourceClass });

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

function patchBareMetalNodeVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchBareMetalNodeVals(filters, vals, target, success, error);
}

function patchBareMetalNodeVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/bare-metal-node?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postBareMetalNode($formValues, target, success, error) {
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

  var valueLeaseInfo = $formValues.querySelector('.valueLeaseInfo')?.value;
  if(valueLeaseInfo != null && valueLeaseInfo !== '')
    vals['leaseInfo'] = JSON.parse(valueLeaseInfo);

  var valueNetworkInfo = $formValues.querySelector('.valueNetworkInfo')?.value;
  if(valueNetworkInfo != null && valueNetworkInfo !== '')
    vals['networkInfo'] = JSON.parse(valueNetworkInfo);

  var valueNodeId = $formValues.querySelector('.valueNodeId')?.value;
  if(valueNodeId != null && valueNodeId !== '')
    vals['nodeId'] = valueNodeId;

  var valueNodeIsMaintenance = $formValues.querySelector('.valueNodeIsMaintenance')?.value;
  if(valueNodeIsMaintenance != null && valueNodeIsMaintenance !== '')
    vals['nodeIsMaintenance'] = valueNodeIsMaintenance;

  var valueNodeLinks = $formValues.querySelector('.valueNodeLinks')?.value;
  if(valueNodeLinks != null && valueNodeLinks !== '')
    vals['nodeLinks'] = JSON.parse(valueNodeLinks);

  var valueNodeName = $formValues.querySelector('.valueNodeName')?.value;
  if(valueNodeName != null && valueNodeName !== '')
    vals['nodeName'] = valueNodeName;

  var valueNodePowerState = $formValues.querySelector('.valueNodePowerState')?.value;
  if(valueNodePowerState != null && valueNodePowerState !== '')
    vals['nodePowerState'] = valueNodePowerState;

  var valueNodeProvisionState = $formValues.querySelector('.valueNodeProvisionState')?.value;
  if(valueNodeProvisionState != null && valueNodeProvisionState !== '')
    vals['nodeProvisionState'] = valueNodeProvisionState;

  var valueNodeResourceClass = $formValues.querySelector('.valueNodeResourceClass')?.value;
  if(valueNodeResourceClass != null && valueNodeResourceClass !== '')
    vals['nodeResourceClass'] = valueNodeResourceClass;

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
    '/en-us/api/bare-metal-node'
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

function postBareMetalNodeVals(vals, target, success, error) {
  fetch(
    '/en-us/api/bare-metal-node'
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

async function deleteBareMetalNode(target, nodeId, success, error) {
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
    '/en-us/api/bare-metal-node/' + encodeURIComponent(nodeId)
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

async function putimportBareMetalNode($formValues, target, nodeId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportBareMetalNodeVals(JSON.parse(json), target, success, error);
}

function putimportBareMetalNodeVals(json, target, success, error) {
  fetch(
    '/en-us/api/bare-metal-node-import'
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

async function deletefilterBareMetalNode(target, success, error) {
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
    '/en-us/api/bare-metal-node'
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

async function websocketBareMetalNode(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketBareMetalNode', function (error, message) {
      var json = JSON.parse(message['body']);
      var nodeId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + nodeId + ' ');
      $box.setAttribute('id', 'box-' + nodeId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + nodeId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + nodeId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + nodeId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-regular fa-hexagon-nodes"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify bare metal nodes in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + nodeId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + nodeId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + nodeId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + nodeId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + nodeId);
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
        var $old_box = document.querySelector('.box-' + nodeId);
      } else {
        document.querySelector('.box-' + nodeId)?.remove();
      }
      if(nodeId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketBareMetalNodeInner(apiRequest) {
  var nodeId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(nodeId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputLeaseInfo = null;
        var inputNetworkInfo = null;
        var inputNodeId = null;
        var inputNodeIsMaintenance = null;
        var inputNodeLinks = null;
        var inputNodeName = null;
        var inputNodePowerState = null;
        var inputNodeProvisionState = null;
        var inputNodeResourceClass = null;
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
        if(vars.includes('leaseInfo'))
          inputLeaseInfo = $response.querySelector('.Page_leaseInfo');
        if(vars.includes('networkInfo'))
          inputNetworkInfo = $response.querySelector('.Page_networkInfo');
        if(vars.includes('nodeId'))
          inputNodeId = $response.querySelector('.Page_nodeId');
        if(vars.includes('nodeIsMaintenance'))
          inputNodeIsMaintenance = $response.querySelector('.Page_nodeIsMaintenance');
        if(vars.includes('nodeLinks'))
          inputNodeLinks = $response.querySelector('.Page_nodeLinks');
        if(vars.includes('nodeName'))
          inputNodeName = $response.querySelector('.Page_nodeName');
        if(vars.includes('nodePowerState'))
          inputNodePowerState = $response.querySelector('.Page_nodePowerState');
        if(vars.includes('nodeProvisionState'))
          inputNodeProvisionState = $response.querySelector('.Page_nodeProvisionState');
        if(vars.includes('nodeResourceClass'))
          inputNodeResourceClass = $response.querySelector('.Page_nodeResourceClass');
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

        jsWebsocketBareMetalNode(nodeId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listBareMetalNode = JSON.parse($response.querySelector('.pageForm .listBareMetalNode')?.value);


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

        if(inputLeaseInfo) {
          document.querySelectorAll('.Page_leaseInfo').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLeaseInfo.getAttribute('value');
            else
              item.textContent = inputLeaseInfo.textContent;
          });
          addGlow(document.querySelector('.Page_leaseInfo'));
        }

        if(inputNetworkInfo) {
          document.querySelectorAll('.Page_networkInfo').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNetworkInfo.getAttribute('value');
            else
              item.textContent = inputNetworkInfo.textContent;
          });
          addGlow(document.querySelector('.Page_networkInfo'));
        }

        if(inputNodeId) {
          document.querySelectorAll('.Page_nodeId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNodeId.getAttribute('value');
            else
              item.textContent = inputNodeId.textContent;
          });
          addGlow(document.querySelector('.Page_nodeId'));
        }

        if(inputNodeIsMaintenance) {
          document.querySelectorAll('.Page_nodeIsMaintenance').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNodeIsMaintenance.getAttribute('value');
            else
              item.textContent = inputNodeIsMaintenance.textContent;
          });
          addGlow(document.querySelector('.Page_nodeIsMaintenance'));
        }

        if(inputNodeLinks) {
          document.querySelectorAll('.Page_nodeLinks').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNodeLinks.getAttribute('value');
            else
              item.textContent = inputNodeLinks.textContent;
          });
          addGlow(document.querySelector('.Page_nodeLinks'));
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

        if(inputNodePowerState) {
          document.querySelectorAll('.Page_nodePowerState').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNodePowerState.getAttribute('value');
            else
              item.textContent = inputNodePowerState.textContent;
          });
          addGlow(document.querySelector('.Page_nodePowerState'));
        }

        if(inputNodeProvisionState) {
          document.querySelectorAll('.Page_nodeProvisionState').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNodeProvisionState.getAttribute('value');
            else
              item.textContent = inputNodeProvisionState.textContent;
          });
          addGlow(document.querySelector('.Page_nodeProvisionState'));
        }

        if(inputNodeResourceClass) {
          document.querySelectorAll('.Page_nodeResourceClass').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNodeResourceClass.getAttribute('value');
            else
              item.textContent = inputNodeResourceClass.textContent;
          });
          addGlow(document.querySelector('.Page_nodeResourceClass'));
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

          pageGraphBareMetalNode();
      });
    });
  }
}

function pageGraphBareMetalNode(apiRequest) {
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
          layout['title'] = 'bare metal nodes';
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
          Plotly.react('htmBodyGraphBareMetalNodePage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqBareMetalNode_time').innerText = '';
  searchPage('BareMetalNode', function() {
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
      document.querySelector('#fqBareMetalNode_time').value = x;
      document.querySelector('#fqBareMetalNode_time').onchange();
      searchPage('BareMetalNode');
    }, speedRate);
  });
}

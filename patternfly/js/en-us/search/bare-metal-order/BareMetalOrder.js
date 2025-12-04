
// Search //

async function searchBareMetalOrder($formFilters, success, error) {
  var filters = searchBareMetalOrderFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchBareMetalOrderVals(filters, target, success, error);
}

function searchBareMetalOrderFilters($formFilters) {
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

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterNetworkId = $formFilters.querySelector('.valueNetworkId')?.value;
    if(filterNetworkId != null && filterNetworkId !== '')
      filters.push({ name: 'fq', value: 'networkId:' + filterNetworkId });

    var filterNumberOfFc430 = $formFilters.querySelector('.valueNumberOfFc430')?.value;
    if(filterNumberOfFc430 != null && filterNumberOfFc430 !== '')
      filters.push({ name: 'fq', value: 'numberOfFc430:' + filterNumberOfFc430 });

    var filterNumberOfFc830 = $formFilters.querySelector('.valueNumberOfFc830')?.value;
    if(filterNumberOfFc830 != null && filterNumberOfFc830 !== '')
      filters.push({ name: 'fq', value: 'numberOfFc830:' + filterNumberOfFc830 });

    var filterNumberOfR730xd = $formFilters.querySelector('.valueNumberOfR730xd')?.value;
    if(filterNumberOfR730xd != null && filterNumberOfR730xd !== '')
      filters.push({ name: 'fq', value: 'numberOfR730xd:' + filterNumberOfR730xd });

    var filterNumberOfWhiteboxFlax1 = $formFilters.querySelector('.valueNumberOfWhiteboxFlax1')?.value;
    if(filterNumberOfWhiteboxFlax1 != null && filterNumberOfWhiteboxFlax1 !== '')
      filters.push({ name: 'fq', value: 'numberOfWhiteboxFlax1:' + filterNumberOfWhiteboxFlax1 });

    var filterNumberOfLenovoSd650nv2A100 = $formFilters.querySelector('.valueNumberOfLenovoSd650nv2A100')?.value;
    if(filterNumberOfLenovoSd650nv2A100 != null && filterNumberOfLenovoSd650nv2A100 !== '')
      filters.push({ name: 'fq', value: 'numberOfLenovoSd650nv2A100:' + filterNumberOfLenovoSd650nv2A100 });

    var filterNumberOfLenovoSd665nv3H100 = $formFilters.querySelector('.valueNumberOfLenovoSd665nv3H100')?.value;
    if(filterNumberOfLenovoSd665nv3H100 != null && filterNumberOfLenovoSd665nv3H100 !== '')
      filters.push({ name: 'fq', value: 'numberOfLenovoSd665nv3H100:' + filterNumberOfLenovoSd665nv3H100 });

    var filterImage = $formFilters.querySelector('.valueImage')?.value;
    if(filterImage != null && filterImage !== '')
      filters.push({ name: 'fq', value: 'image:' + filterImage });

    var filterSshPublicKey = $formFilters.querySelector('.valueSshPublicKey')?.value;
    if(filterSshPublicKey != null && filterSshPublicKey !== '')
      filters.push({ name: 'fq', value: 'sshPublicKey:' + filterSshPublicKey });

    var $filterFloatingIpCheckbox = $formFilters.querySelector('input.valueFloatingIp[type = "checkbox"]');
    var $filterFloatingIpSelect = $formFilters.querySelector('select.valueFloatingIp');
    var filterFloatingIp = $filterFloatingIpSelect.length ? $filterFloatingIpSelect.value : $filterFloatingIpCheckbox.checked;
    var filterFloatingIpSelectVal = $formFilters.querySelector('select.filterFloatingIp')?.value;
    var filterFloatingIp = null;
    if(filterFloatingIpSelectVal !== '')
      filterFloatingIp = filterFloatingIpSelectVal == 'true';
    if(filterFloatingIp != null && filterFloatingIp === true)
      filters.push({ name: 'fq', value: 'floatingIp:' + filterFloatingIp });

    var filterStatus = $formFilters.querySelector('.valueStatus')?.value;
    if(filterStatus != null && filterStatus !== '')
      filters.push({ name: 'fq', value: 'status:' + filterStatus });

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

function searchBareMetalOrderVals(filters, target, success, error) {

  fetch(
    '/en-us/api/bare-metal-order?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestBareMetalOrderNetworkId(filters, $list, pk = null, networkId = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-network-wired"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = 
o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var val = o['id'];
        var checked = val == null ? false : (Array.isArray(val) ? val.includes(pk.toString()) : val == networkId);
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_networkId_' + pk + '_id_' + o['id']);
        $input.setAttribute('name', 'id');
        $input.setAttribute('value', o['id']);
        $input.setAttribute('class', 'valueNetworkId ');
        if(pk != null) {
          $input.addEventListener('change', function(event) {
            patchBareMetalOrderVals([{ name: 'fq', value: 'pk:' + pk }], { [(event.target.checked ? 'set' : 'remove') + 'NetworkId']: o['id'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestBareMetalOrderNetworkId(filters, $list, pk, o['id'], relate, target);
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
  searchBareMetalNetworkVals(filters, target, success, error);
}

function suggestBareMetalOrderObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-regular fa-share-nodes"></i>');
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
  searchBareMetalOrderVals($formFilters, target, success, error);
}

// GET //

async function getBareMetalOrder(pk) {
  fetch(
    '/en-us/api/bare-metal-order/' + pk
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

async function patchBareMetalOrder($formFilters, $formValues, target, pk, success, error) {
  var filters = patchBareMetalOrderFilters($formFilters);

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

  var valueNetworkId = (Array.from($formValues.querySelectorAll('.valueNetworkId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueNetworkId != null && valueNetworkId !== '')
    vals['setNetworkId'] = valueNetworkId;

  var valueNumberOfFc430 = $formValues.querySelector('.valueNumberOfFc430')?.value;
  var removeNumberOfFc430 = $formValues.querySelector('.removeNumberOfFc430')?.value === 'true';
  var setNumberOfFc430 = removeNumberOfFc430 ? null : $formValues.querySelector('.setNumberOfFc430')?.value;
  var addNumberOfFc430 = $formValues.querySelector('.addNumberOfFc430')?.value;
  if(removeNumberOfFc430 || setNumberOfFc430 != null && setNumberOfFc430 !== '')
    vals['setNumberOfFc430'] = setNumberOfFc430;
  if(addNumberOfFc430 != null && addNumberOfFc430 !== '')
    vals['addNumberOfFc430'] = addNumberOfFc430;
  var removeNumberOfFc430 = $formValues.querySelector('.removeNumberOfFc430')?.value;
  if(removeNumberOfFc430 != null && removeNumberOfFc430 !== '')
    vals['removeNumberOfFc430'] = removeNumberOfFc430;

  var valueNumberOfFc830 = $formValues.querySelector('.valueNumberOfFc830')?.value;
  var removeNumberOfFc830 = $formValues.querySelector('.removeNumberOfFc830')?.value === 'true';
  var setNumberOfFc830 = removeNumberOfFc830 ? null : $formValues.querySelector('.setNumberOfFc830')?.value;
  var addNumberOfFc830 = $formValues.querySelector('.addNumberOfFc830')?.value;
  if(removeNumberOfFc830 || setNumberOfFc830 != null && setNumberOfFc830 !== '')
    vals['setNumberOfFc830'] = setNumberOfFc830;
  if(addNumberOfFc830 != null && addNumberOfFc830 !== '')
    vals['addNumberOfFc830'] = addNumberOfFc830;
  var removeNumberOfFc830 = $formValues.querySelector('.removeNumberOfFc830')?.value;
  if(removeNumberOfFc830 != null && removeNumberOfFc830 !== '')
    vals['removeNumberOfFc830'] = removeNumberOfFc830;

  var valueNumberOfR730xd = $formValues.querySelector('.valueNumberOfR730xd')?.value;
  var removeNumberOfR730xd = $formValues.querySelector('.removeNumberOfR730xd')?.value === 'true';
  var setNumberOfR730xd = removeNumberOfR730xd ? null : $formValues.querySelector('.setNumberOfR730xd')?.value;
  var addNumberOfR730xd = $formValues.querySelector('.addNumberOfR730xd')?.value;
  if(removeNumberOfR730xd || setNumberOfR730xd != null && setNumberOfR730xd !== '')
    vals['setNumberOfR730xd'] = setNumberOfR730xd;
  if(addNumberOfR730xd != null && addNumberOfR730xd !== '')
    vals['addNumberOfR730xd'] = addNumberOfR730xd;
  var removeNumberOfR730xd = $formValues.querySelector('.removeNumberOfR730xd')?.value;
  if(removeNumberOfR730xd != null && removeNumberOfR730xd !== '')
    vals['removeNumberOfR730xd'] = removeNumberOfR730xd;

  var valueNumberOfWhiteboxFlax1 = $formValues.querySelector('.valueNumberOfWhiteboxFlax1')?.value;
  var removeNumberOfWhiteboxFlax1 = $formValues.querySelector('.removeNumberOfWhiteboxFlax1')?.value === 'true';
  var setNumberOfWhiteboxFlax1 = removeNumberOfWhiteboxFlax1 ? null : $formValues.querySelector('.setNumberOfWhiteboxFlax1')?.value;
  var addNumberOfWhiteboxFlax1 = $formValues.querySelector('.addNumberOfWhiteboxFlax1')?.value;
  if(removeNumberOfWhiteboxFlax1 || setNumberOfWhiteboxFlax1 != null && setNumberOfWhiteboxFlax1 !== '')
    vals['setNumberOfWhiteboxFlax1'] = setNumberOfWhiteboxFlax1;
  if(addNumberOfWhiteboxFlax1 != null && addNumberOfWhiteboxFlax1 !== '')
    vals['addNumberOfWhiteboxFlax1'] = addNumberOfWhiteboxFlax1;
  var removeNumberOfWhiteboxFlax1 = $formValues.querySelector('.removeNumberOfWhiteboxFlax1')?.value;
  if(removeNumberOfWhiteboxFlax1 != null && removeNumberOfWhiteboxFlax1 !== '')
    vals['removeNumberOfWhiteboxFlax1'] = removeNumberOfWhiteboxFlax1;

  var valueNumberOfLenovoSd650nv2A100 = $formValues.querySelector('.valueNumberOfLenovoSd650nv2A100')?.value;
  var removeNumberOfLenovoSd650nv2A100 = $formValues.querySelector('.removeNumberOfLenovoSd650nv2A100')?.value === 'true';
  var setNumberOfLenovoSd650nv2A100 = removeNumberOfLenovoSd650nv2A100 ? null : $formValues.querySelector('.setNumberOfLenovoSd650nv2A100')?.value;
  var addNumberOfLenovoSd650nv2A100 = $formValues.querySelector('.addNumberOfLenovoSd650nv2A100')?.value;
  if(removeNumberOfLenovoSd650nv2A100 || setNumberOfLenovoSd650nv2A100 != null && setNumberOfLenovoSd650nv2A100 !== '')
    vals['setNumberOfLenovoSd650nv2A100'] = setNumberOfLenovoSd650nv2A100;
  if(addNumberOfLenovoSd650nv2A100 != null && addNumberOfLenovoSd650nv2A100 !== '')
    vals['addNumberOfLenovoSd650nv2A100'] = addNumberOfLenovoSd650nv2A100;
  var removeNumberOfLenovoSd650nv2A100 = $formValues.querySelector('.removeNumberOfLenovoSd650nv2A100')?.value;
  if(removeNumberOfLenovoSd650nv2A100 != null && removeNumberOfLenovoSd650nv2A100 !== '')
    vals['removeNumberOfLenovoSd650nv2A100'] = removeNumberOfLenovoSd650nv2A100;

  var valueNumberOfLenovoSd665nv3H100 = $formValues.querySelector('.valueNumberOfLenovoSd665nv3H100')?.value;
  var removeNumberOfLenovoSd665nv3H100 = $formValues.querySelector('.removeNumberOfLenovoSd665nv3H100')?.value === 'true';
  var setNumberOfLenovoSd665nv3H100 = removeNumberOfLenovoSd665nv3H100 ? null : $formValues.querySelector('.setNumberOfLenovoSd665nv3H100')?.value;
  var addNumberOfLenovoSd665nv3H100 = $formValues.querySelector('.addNumberOfLenovoSd665nv3H100')?.value;
  if(removeNumberOfLenovoSd665nv3H100 || setNumberOfLenovoSd665nv3H100 != null && setNumberOfLenovoSd665nv3H100 !== '')
    vals['setNumberOfLenovoSd665nv3H100'] = setNumberOfLenovoSd665nv3H100;
  if(addNumberOfLenovoSd665nv3H100 != null && addNumberOfLenovoSd665nv3H100 !== '')
    vals['addNumberOfLenovoSd665nv3H100'] = addNumberOfLenovoSd665nv3H100;
  var removeNumberOfLenovoSd665nv3H100 = $formValues.querySelector('.removeNumberOfLenovoSd665nv3H100')?.value;
  if(removeNumberOfLenovoSd665nv3H100 != null && removeNumberOfLenovoSd665nv3H100 !== '')
    vals['removeNumberOfLenovoSd665nv3H100'] = removeNumberOfLenovoSd665nv3H100;

  var valueImage = $formValues.querySelector('.valueImage')?.value;
  var removeImage = $formValues.querySelector('.removeImage')?.value === 'true';
  var setImage = removeImage ? null : $formValues.querySelector('.setImage')?.value;
  var addImage = $formValues.querySelector('.addImage')?.value;
  if(removeImage || setImage != null && setImage !== '')
    vals['setImage'] = setImage;
  if(addImage != null && addImage !== '')
    vals['addImage'] = addImage;
  var removeImage = $formValues.querySelector('.removeImage')?.value;
  if(removeImage != null && removeImage !== '')
    vals['removeImage'] = removeImage;

  var valueSshPublicKey = $formValues.querySelector('.valueSshPublicKey')?.value;
  var removeSshPublicKey = $formValues.querySelector('.removeSshPublicKey')?.value === 'true';
  var setSshPublicKey = removeSshPublicKey ? null : $formValues.querySelector('.setSshPublicKey')?.value;
  var addSshPublicKey = $formValues.querySelector('.addSshPublicKey')?.value;
  if(removeSshPublicKey || setSshPublicKey != null && setSshPublicKey !== '')
    vals['setSshPublicKey'] = setSshPublicKey;
  if(addSshPublicKey != null && addSshPublicKey !== '')
    vals['addSshPublicKey'] = addSshPublicKey;
  var removeSshPublicKey = $formValues.querySelector('.removeSshPublicKey')?.value;
  if(removeSshPublicKey != null && removeSshPublicKey !== '')
    vals['removeSshPublicKey'] = removeSshPublicKey;

  var valueFloatingIp = $formValues.querySelector('.valueFloatingIp')?.value;
  var removeFloatingIp = $formValues.querySelector('.removeFloatingIp')?.value === 'true';
  if(valueFloatingIp != null)
    valueFloatingIp = valueFloatingIp === 'true';
  var valueFloatingIpSelectVal = $formValues.querySelector('select.setFloatingIp')?.value;
  if(valueFloatingIpSelectVal != null)
    valueFloatingIpSelectVal = valueFloatingIpSelectVal === 'true';
  if(valueFloatingIpSelectVal != null && valueFloatingIpSelectVal !== '')
    valueFloatingIp = valueFloatingIpSelectVal == 'true';
  var setFloatingIp = removeFloatingIp ? null : valueFloatingIp;
  var addFloatingIp = $formValues.querySelector('.addFloatingIp')?.checked;
  if(removeFloatingIp || setFloatingIp != null && setFloatingIp !== '')
    vals['setFloatingIp'] = setFloatingIp;
  if(addFloatingIp != null && addFloatingIp !== '')
    vals['addFloatingIp'] = addFloatingIp;
  var removeFloatingIp = $formValues.querySelector('.removeFloatingIp')?.checked;
  if(removeFloatingIp != null && removeFloatingIp !== '')
    vals['removeFloatingIp'] = removeFloatingIp;

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

  patchBareMetalOrderVals(pk == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, target, success, error);
}

function patchBareMetalOrderFilters($formFilters) {
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

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterNetworkId = $formFilters.querySelector('.valueNetworkId')?.value;
    if(filterNetworkId != null && filterNetworkId !== '')
      filters.push({ name: 'fq', value: 'networkId:' + filterNetworkId });

    var filterNumberOfFc430 = $formFilters.querySelector('.valueNumberOfFc430')?.value;
    if(filterNumberOfFc430 != null && filterNumberOfFc430 !== '')
      filters.push({ name: 'fq', value: 'numberOfFc430:' + filterNumberOfFc430 });

    var filterNumberOfFc830 = $formFilters.querySelector('.valueNumberOfFc830')?.value;
    if(filterNumberOfFc830 != null && filterNumberOfFc830 !== '')
      filters.push({ name: 'fq', value: 'numberOfFc830:' + filterNumberOfFc830 });

    var filterNumberOfR730xd = $formFilters.querySelector('.valueNumberOfR730xd')?.value;
    if(filterNumberOfR730xd != null && filterNumberOfR730xd !== '')
      filters.push({ name: 'fq', value: 'numberOfR730xd:' + filterNumberOfR730xd });

    var filterNumberOfWhiteboxFlax1 = $formFilters.querySelector('.valueNumberOfWhiteboxFlax1')?.value;
    if(filterNumberOfWhiteboxFlax1 != null && filterNumberOfWhiteboxFlax1 !== '')
      filters.push({ name: 'fq', value: 'numberOfWhiteboxFlax1:' + filterNumberOfWhiteboxFlax1 });

    var filterNumberOfLenovoSd650nv2A100 = $formFilters.querySelector('.valueNumberOfLenovoSd650nv2A100')?.value;
    if(filterNumberOfLenovoSd650nv2A100 != null && filterNumberOfLenovoSd650nv2A100 !== '')
      filters.push({ name: 'fq', value: 'numberOfLenovoSd650nv2A100:' + filterNumberOfLenovoSd650nv2A100 });

    var filterNumberOfLenovoSd665nv3H100 = $formFilters.querySelector('.valueNumberOfLenovoSd665nv3H100')?.value;
    if(filterNumberOfLenovoSd665nv3H100 != null && filterNumberOfLenovoSd665nv3H100 !== '')
      filters.push({ name: 'fq', value: 'numberOfLenovoSd665nv3H100:' + filterNumberOfLenovoSd665nv3H100 });

    var filterImage = $formFilters.querySelector('.valueImage')?.value;
    if(filterImage != null && filterImage !== '')
      filters.push({ name: 'fq', value: 'image:' + filterImage });

    var filterSshPublicKey = $formFilters.querySelector('.valueSshPublicKey')?.value;
    if(filterSshPublicKey != null && filterSshPublicKey !== '')
      filters.push({ name: 'fq', value: 'sshPublicKey:' + filterSshPublicKey });

    var $filterFloatingIpCheckbox = $formFilters.querySelector('input.valueFloatingIp[type = "checkbox"]');
    var $filterFloatingIpSelect = $formFilters.querySelector('select.valueFloatingIp');
    var filterFloatingIp = $filterFloatingIpSelect.length ? $filterFloatingIpSelect.value : $filterFloatingIpCheckbox.checked;
    var filterFloatingIpSelectVal = $formFilters.querySelector('select.filterFloatingIp')?.value;
    var filterFloatingIp = null;
    if(filterFloatingIpSelectVal !== '')
      filterFloatingIp = filterFloatingIpSelectVal == 'true';
    if(filterFloatingIp != null && filterFloatingIp === true)
      filters.push({ name: 'fq', value: 'floatingIp:' + filterFloatingIp });

    var filterStatus = $formFilters.querySelector('.valueStatus')?.value;
    if(filterStatus != null && filterStatus !== '')
      filters.push({ name: 'fq', value: 'status:' + filterStatus });

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

function patchBareMetalOrderVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchBareMetalOrderVals(filters, vals, target, success, error);
}

function patchBareMetalOrderVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/bare-metal-order?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postBareMetalOrder($formValues, target, success, error) {
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

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueNetworkId = (Array.from($formValues.querySelectorAll('.valueNetworkId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueNetworkId != null && valueNetworkId !== '')
    vals['networkId'] = valueNetworkId;

  var valueNumberOfFc430 = $formValues.querySelector('.valueNumberOfFc430')?.value;
  if(valueNumberOfFc430 != null && valueNumberOfFc430 !== '')
    vals['numberOfFc430'] = valueNumberOfFc430;

  var valueNumberOfFc830 = $formValues.querySelector('.valueNumberOfFc830')?.value;
  if(valueNumberOfFc830 != null && valueNumberOfFc830 !== '')
    vals['numberOfFc830'] = valueNumberOfFc830;

  var valueNumberOfR730xd = $formValues.querySelector('.valueNumberOfR730xd')?.value;
  if(valueNumberOfR730xd != null && valueNumberOfR730xd !== '')
    vals['numberOfR730xd'] = valueNumberOfR730xd;

  var valueNumberOfWhiteboxFlax1 = $formValues.querySelector('.valueNumberOfWhiteboxFlax1')?.value;
  if(valueNumberOfWhiteboxFlax1 != null && valueNumberOfWhiteboxFlax1 !== '')
    vals['numberOfWhiteboxFlax1'] = valueNumberOfWhiteboxFlax1;

  var valueNumberOfLenovoSd650nv2A100 = $formValues.querySelector('.valueNumberOfLenovoSd650nv2A100')?.value;
  if(valueNumberOfLenovoSd650nv2A100 != null && valueNumberOfLenovoSd650nv2A100 !== '')
    vals['numberOfLenovoSd650nv2A100'] = valueNumberOfLenovoSd650nv2A100;

  var valueNumberOfLenovoSd665nv3H100 = $formValues.querySelector('.valueNumberOfLenovoSd665nv3H100')?.value;
  if(valueNumberOfLenovoSd665nv3H100 != null && valueNumberOfLenovoSd665nv3H100 !== '')
    vals['numberOfLenovoSd665nv3H100'] = valueNumberOfLenovoSd665nv3H100;

  var valueImage = $formValues.querySelector('.valueImage')?.value;
  if(valueImage != null && valueImage !== '')
    vals['image'] = valueImage;

  var valueSshPublicKey = $formValues.querySelector('.valueSshPublicKey')?.value;
  if(valueSshPublicKey != null && valueSshPublicKey !== '')
    vals['sshPublicKey'] = valueSshPublicKey;

  var valueFloatingIp = $formValues.querySelector('.valueFloatingIp')?.value;
  if(valueFloatingIp != null && valueFloatingIp !== '')
    vals['floatingIp'] = valueFloatingIp == 'true';

  var valueStatus = $formValues.querySelector('.valueStatus')?.value;
  if(valueStatus != null && valueStatus !== '')
    vals['status'] = valueStatus;

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
    '/en-us/api/bare-metal-order'
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

function postBareMetalOrderVals(vals, target, success, error) {
  fetch(
    '/en-us/api/bare-metal-order'
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

async function deleteBareMetalOrder(target, pk, success, error) {
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
    '/en-us/api/bare-metal-order/' + encodeURIComponent(pk)
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

// DELETEFilter //

async function deletefilterBareMetalOrder(target, success, error) {
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
    '/en-us/api/bare-metal-order'
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

async function websocketBareMetalOrder(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketBareMetalOrder', function (error, message) {
      var json = JSON.parse(message['body']);
      var pk = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + pk + ' ');
      $box.setAttribute('id', 'box-' + pk);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + pk);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + pk);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + pk);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-regular fa-share-nodes"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify bare metal orders in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + pk + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + pk);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + pk);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + pk);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + pk);
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
        var $old_box = document.querySelector('.box-' + pk);
      } else {
        document.querySelector('.box-' + pk)?.remove();
      }
      if(pk) {
        if(success)
          success(json);
      }
    });

    window.eventBus.registerHandler('websocketBareMetalNetwork', function (error, message) {
      document.querySelector('.Page_networkId').trigger('oninput');
      document.querySelector('.Page_networkId_add').innerText = 'add a bare metal network';
      document.querySelector('.Page_networkId_add').classList.remove('w3-disabled');
      document.querySelector('.Page_networkId_add').setAttribute('disabled', false);
    });
  }
}
async function websocketBareMetalOrderInner(apiRequest) {
  var pk = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(pk != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputDescription = null;
        var inputNetworkId = null;
        var inputNumberOfFc430 = null;
        var inputNumberOfFc830 = null;
        var inputNumberOfR730xd = null;
        var inputNumberOfWhiteboxFlax1 = null;
        var inputNumberOfLenovoSd650nv2A100 = null;
        var inputNumberOfLenovoSd665nv3H100 = null;
        var inputImage = null;
        var inputSshPublicKey = null;
        var inputFloatingIp = null;
        var inputStatus = null;
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
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.Page_description');
        if(vars.includes('networkId'))
          inputNetworkId = $response.querySelector('.Page_networkId');
        if(vars.includes('numberOfFc430'))
          inputNumberOfFc430 = $response.querySelector('.Page_numberOfFc430');
        if(vars.includes('numberOfFc830'))
          inputNumberOfFc830 = $response.querySelector('.Page_numberOfFc830');
        if(vars.includes('numberOfR730xd'))
          inputNumberOfR730xd = $response.querySelector('.Page_numberOfR730xd');
        if(vars.includes('numberOfWhiteboxFlax1'))
          inputNumberOfWhiteboxFlax1 = $response.querySelector('.Page_numberOfWhiteboxFlax1');
        if(vars.includes('numberOfLenovoSd650nv2A100'))
          inputNumberOfLenovoSd650nv2A100 = $response.querySelector('.Page_numberOfLenovoSd650nv2A100');
        if(vars.includes('numberOfLenovoSd665nv3H100'))
          inputNumberOfLenovoSd665nv3H100 = $response.querySelector('.Page_numberOfLenovoSd665nv3H100');
        if(vars.includes('image'))
          inputImage = $response.querySelector('.Page_image');
        if(vars.includes('sshPublicKey'))
          inputSshPublicKey = $response.querySelector('.Page_sshPublicKey');
        if(vars.includes('floatingIp'))
          inputFloatingIp = $response.querySelector('.Page_floatingIp');
        if(vars.includes('status'))
          inputStatus = $response.querySelector('.Page_status');
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

        jsWebsocketBareMetalOrder(pk, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listBareMetalOrder = JSON.parse($response.querySelector('.pageForm .listBareMetalOrder')?.value);


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

        if(inputDescription) {
          document.querySelectorAll('.Page_description').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDescription.getAttribute('value');
            else
              item.textContent = inputDescription.textContent;
          });
          addGlow(document.querySelector('.Page_description'));
        }

        if(inputNetworkId) {
          document.querySelectorAll('.Page_networkId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNetworkId.getAttribute('value');
            else
              item.textContent = inputNetworkId.textContent;
          });
          addGlow(document.querySelector('.Page_networkId'));
        }

        if(inputNumberOfFc430) {
          document.querySelectorAll('.Page_numberOfFc430').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNumberOfFc430.getAttribute('value');
            else
              item.textContent = inputNumberOfFc430.textContent;
          });
          addGlow(document.querySelector('.Page_numberOfFc430'));
        }

        if(inputNumberOfFc830) {
          document.querySelectorAll('.Page_numberOfFc830').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNumberOfFc830.getAttribute('value');
            else
              item.textContent = inputNumberOfFc830.textContent;
          });
          addGlow(document.querySelector('.Page_numberOfFc830'));
        }

        if(inputNumberOfR730xd) {
          document.querySelectorAll('.Page_numberOfR730xd').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNumberOfR730xd.getAttribute('value');
            else
              item.textContent = inputNumberOfR730xd.textContent;
          });
          addGlow(document.querySelector('.Page_numberOfR730xd'));
        }

        if(inputNumberOfWhiteboxFlax1) {
          document.querySelectorAll('.Page_numberOfWhiteboxFlax1').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNumberOfWhiteboxFlax1.getAttribute('value');
            else
              item.textContent = inputNumberOfWhiteboxFlax1.textContent;
          });
          addGlow(document.querySelector('.Page_numberOfWhiteboxFlax1'));
        }

        if(inputNumberOfLenovoSd650nv2A100) {
          document.querySelectorAll('.Page_numberOfLenovoSd650nv2A100').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNumberOfLenovoSd650nv2A100.getAttribute('value');
            else
              item.textContent = inputNumberOfLenovoSd650nv2A100.textContent;
          });
          addGlow(document.querySelector('.Page_numberOfLenovoSd650nv2A100'));
        }

        if(inputNumberOfLenovoSd665nv3H100) {
          document.querySelectorAll('.Page_numberOfLenovoSd665nv3H100').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNumberOfLenovoSd665nv3H100.getAttribute('value');
            else
              item.textContent = inputNumberOfLenovoSd665nv3H100.textContent;
          });
          addGlow(document.querySelector('.Page_numberOfLenovoSd665nv3H100'));
        }

        if(inputImage) {
          document.querySelectorAll('.Page_image').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputImage.getAttribute('value');
            else
              item.textContent = inputImage.textContent;
          });
          addGlow(document.querySelector('.Page_image'));
        }

        if(inputSshPublicKey) {
          document.querySelectorAll('.Page_sshPublicKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSshPublicKey.getAttribute('value');
            else
              item.textContent = inputSshPublicKey.textContent;
          });
          addGlow(document.querySelector('.Page_sshPublicKey'));
        }

        if(inputFloatingIp) {
          document.querySelectorAll('.Page_floatingIp').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputFloatingIp.getAttribute('value');
            else
              item.textContent = inputFloatingIp.textContent;
          });
          addGlow(document.querySelector('.Page_floatingIp'));
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

          pageGraphBareMetalOrder();
      });
    });
  }
}

function pageGraphBareMetalOrder(apiRequest) {
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
          layout['title'] = 'bare metal orders';
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
          Plotly.react('htmBodyGraphBareMetalOrderPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqBareMetalOrder_time').innerText = '';
  searchPage('BareMetalOrder', function() {
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
      document.querySelector('#fqBareMetalOrder_time').value = x;
      document.querySelector('#fqBareMetalOrder_time').onchange();
      searchPage('BareMetalOrder');
    }, speedRate);
  });
}

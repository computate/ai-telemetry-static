
// Search //

async function searchSiteUser($formFilters, success, error) {
  var filters = searchSiteUserFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, textStatus, errorThrown ) {};

  searchSiteUserVals(filters, target, success, error);
}

function searchSiteUserFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterObjectId = $formFilters.querySelector('.valueObjectId')?.value;
    if(filterObjectId != null && filterObjectId !== '')
      filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

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

    var $filterSeeArchivedCheckbox = $formFilters.querySelector('input.valueSeeArchived[type = "checkbox"]');
    var $filterSeeArchivedSelect = $formFilters.querySelector('select.valueSeeArchived');
    var filterSeeArchived = $filterSeeArchivedSelect.length ? $filterSeeArchivedSelect.value : $filterSeeArchivedCheckbox.checked;
    var filterSeeArchivedSelectVal = $formFilters.querySelector('select.filterSeeArchived')?.value;
    var filterSeeArchived = null;
    if(filterSeeArchivedSelectVal !== '')
      filterSeeArchived = filterSeeArchivedSelectVal == 'true';
    if(filterSeeArchived != null && filterSeeArchived === true)
      filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

    var $filterSeeDeletedCheckbox = $formFilters.querySelector('input.valueSeeDeleted[type = "checkbox"]');
    var $filterSeeDeletedSelect = $formFilters.querySelector('select.valueSeeDeleted');
    var filterSeeDeleted = $filterSeeDeletedSelect.length ? $filterSeeDeletedSelect.value : $filterSeeDeletedCheckbox.checked;
    var filterSeeDeletedSelectVal = $formFilters.querySelector('select.filterSeeDeleted')?.value;
    var filterSeeDeleted = null;
    if(filterSeeDeletedSelectVal !== '')
      filterSeeDeleted = filterSeeDeletedSelectVal == 'true';
    if(filterSeeDeleted != null && filterSeeDeleted === true)
      filters.push({ name: 'fq', value: 'seeDeleted:' + filterSeeDeleted });

    var filterInheritPk = $formFilters.querySelector('.valueInheritPk')?.value;
    if(filterInheritPk != null && filterInheritPk !== '')
      filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

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

    var filterObjectIcon = $formFilters.querySelector('.valueObjectIcon')?.value;
    if(filterObjectIcon != null && filterObjectIcon !== '')
      filters.push({ name: 'fq', value: 'objectIcon:' + filterObjectIcon });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlId = $formFilters.querySelector('.valuePageUrlId')?.value;
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

    var filterPageUrlPk = $formFilters.querySelector('.valuePageUrlPk')?.value;
    if(filterPageUrlPk != null && filterPageUrlPk !== '')
      filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

    var filterPageUrlApi = $formFilters.querySelector('.valuePageUrlApi')?.value;
    if(filterPageUrlApi != null && filterPageUrlApi !== '')
      filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterUserKeys = $formFilters.querySelector('.valueUserKeys')?.value;
    if(filterUserKeys != null && filterUserKeys !== '')
      filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

    var filterUserId = $formFilters.querySelector('.valueUserId')?.value;
    if(filterUserId != null && filterUserId !== '')
      filters.push({ name: 'fq', value: 'userId:' + filterUserId });

    var filterUserName = $formFilters.querySelector('.valueUserName')?.value;
    if(filterUserName != null && filterUserName !== '')
      filters.push({ name: 'fq', value: 'userName:' + filterUserName });

    var filterUserEmail = $formFilters.querySelector('.valueUserEmail')?.value;
    if(filterUserEmail != null && filterUserEmail !== '')
      filters.push({ name: 'fq', value: 'userEmail:' + filterUserEmail });

    var filterUserFirstName = $formFilters.querySelector('.valueUserFirstName')?.value;
    if(filterUserFirstName != null && filterUserFirstName !== '')
      filters.push({ name: 'fq', value: 'userFirstName:' + filterUserFirstName });

    var filterUserLastName = $formFilters.querySelector('.valueUserLastName')?.value;
    if(filterUserLastName != null && filterUserLastName !== '')
      filters.push({ name: 'fq', value: 'userLastName:' + filterUserLastName });

    var filterUserFullName = $formFilters.querySelector('.valueUserFullName')?.value;
    if(filterUserFullName != null && filterUserFullName !== '')
      filters.push({ name: 'fq', value: 'userFullName:' + filterUserFullName });
  }
  return filters;
}

function searchSiteUserVals(filters, target, success, error) {

  fetch(
    '/api/user?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

function suggestSiteUserObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    $list.empty();
    data['list'].forEach((o, i) => {
      var $i = document.querySelector('<i class="fa-duotone fa-solid fa-user-gear"></i>');
      var $span = document.createElement('span');      $span.setAttribute('class', '');      $span.innerText = o['objectTitle'];
      var $li = document.createElement('li');
      var $a = document.createElement('a').setAttribute('href', o['pageUrlPk']);
      $a.append($i);
      $a.append($span);
      $li.append($a);
      $list.append($li);
    });
  };
  error = function( jqXhr, textStatus, errorThrown ) {};
  searchSiteUserVals($formFilters, target, success, error);
}

// PATCH //

async function patchSiteUser($formFilters, $formValues, target, pk, success, error) {
  var filters = patchSiteUserFilters($formFilters);

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

  var valueObjectId = $formValues.querySelector('.valueObjectId')?.value;
  var removeObjectId = $formValues.querySelector('.removeObjectId')?.value === 'true';
  var setObjectId = removeObjectId ? null : $formValues.querySelector('.setObjectId')?.value;
  var addObjectId = $formValues.querySelector('.addObjectId')?.value;
  if(removeObjectId || setObjectId != null && setObjectId !== '')
    vals['setObjectId'] = setObjectId;
  if(addObjectId != null && addObjectId !== '')
    vals['addObjectId'] = addObjectId;
  var removeObjectId = $formValues.querySelector('.removeObjectId')?.value;
  if(removeObjectId != null && removeObjectId !== '')
    vals['removeObjectId'] = removeObjectId;

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

  var valueSeeArchived = $formValues.querySelector('.valueSeeArchived')?.value;
  var removeSeeArchived = $formValues.querySelector('.removeSeeArchived')?.value === 'true';
  if(valueSeeArchived != null)
    valueSeeArchived = valueSeeArchived === 'true';
  var valueSeeArchivedSelectVal = $formValues.querySelector('select.setSeeArchived')?.value;
  if(valueSeeArchivedSelectVal != null)
    valueSeeArchivedSelectVal = valueSeeArchivedSelectVal === 'true';
  if(valueSeeArchivedSelectVal != null && valueSeeArchivedSelectVal !== '')
    valueSeeArchived = valueSeeArchivedSelectVal == 'true';
  var setSeeArchived = removeSeeArchived ? null : valueSeeArchived;
  var addSeeArchived = $formValues.querySelector('.addSeeArchived')?.checked;
  if(removeSeeArchived || setSeeArchived != null && setSeeArchived !== '')
    vals['setSeeArchived'] = setSeeArchived;
  if(addSeeArchived != null && addSeeArchived !== '')
    vals['addSeeArchived'] = addSeeArchived;
  var removeSeeArchived = $formValues.querySelector('.removeSeeArchived')?.checked;
  if(removeSeeArchived != null && removeSeeArchived !== '')
    vals['removeSeeArchived'] = removeSeeArchived;

  var valueSeeDeleted = $formValues.querySelector('.valueSeeDeleted')?.value;
  var removeSeeDeleted = $formValues.querySelector('.removeSeeDeleted')?.value === 'true';
  if(valueSeeDeleted != null)
    valueSeeDeleted = valueSeeDeleted === 'true';
  var valueSeeDeletedSelectVal = $formValues.querySelector('select.setSeeDeleted')?.value;
  if(valueSeeDeletedSelectVal != null)
    valueSeeDeletedSelectVal = valueSeeDeletedSelectVal === 'true';
  if(valueSeeDeletedSelectVal != null && valueSeeDeletedSelectVal !== '')
    valueSeeDeleted = valueSeeDeletedSelectVal == 'true';
  var setSeeDeleted = removeSeeDeleted ? null : valueSeeDeleted;
  var addSeeDeleted = $formValues.querySelector('.addSeeDeleted')?.checked;
  if(removeSeeDeleted || setSeeDeleted != null && setSeeDeleted !== '')
    vals['setSeeDeleted'] = setSeeDeleted;
  if(addSeeDeleted != null && addSeeDeleted !== '')
    vals['addSeeDeleted'] = addSeeDeleted;
  var removeSeeDeleted = $formValues.querySelector('.removeSeeDeleted')?.checked;
  if(removeSeeDeleted != null && removeSeeDeleted !== '')
    vals['removeSeeDeleted'] = removeSeeDeleted;

  var valueInheritPk = $formValues.querySelector('.valueInheritPk')?.value;
  var removeInheritPk = $formValues.querySelector('.removeInheritPk')?.value === 'true';
  var setInheritPk = removeInheritPk ? null : $formValues.querySelector('.setInheritPk')?.value;
  var addInheritPk = $formValues.querySelector('.addInheritPk')?.value;
  if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
    vals['setInheritPk'] = setInheritPk;
  if(addInheritPk != null && addInheritPk !== '')
    vals['addInheritPk'] = addInheritPk;
  var removeInheritPk = $formValues.querySelector('.removeInheritPk')?.value;
  if(removeInheritPk != null && removeInheritPk !== '')
    vals['removeInheritPk'] = removeInheritPk;

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

  var valueUserId = $formValues.querySelector('.valueUserId')?.value;
  var removeUserId = $formValues.querySelector('.removeUserId')?.value === 'true';
  var setUserId = removeUserId ? null : $formValues.querySelector('.setUserId')?.value;
  var addUserId = $formValues.querySelector('.addUserId')?.value;
  if(removeUserId || setUserId != null && setUserId !== '')
    vals['setUserId'] = setUserId;
  if(addUserId != null && addUserId !== '')
    vals['addUserId'] = addUserId;
  var removeUserId = $formValues.querySelector('.removeUserId')?.value;
  if(removeUserId != null && removeUserId !== '')
    vals['removeUserId'] = removeUserId;

  var valueUserName = $formValues.querySelector('.valueUserName')?.value;
  var removeUserName = $formValues.querySelector('.removeUserName')?.value === 'true';
  var setUserName = removeUserName ? null : $formValues.querySelector('.setUserName')?.value;
  var addUserName = $formValues.querySelector('.addUserName')?.value;
  if(removeUserName || setUserName != null && setUserName !== '')
    vals['setUserName'] = setUserName;
  if(addUserName != null && addUserName !== '')
    vals['addUserName'] = addUserName;
  var removeUserName = $formValues.querySelector('.removeUserName')?.value;
  if(removeUserName != null && removeUserName !== '')
    vals['removeUserName'] = removeUserName;

  var valueUserEmail = $formValues.querySelector('.valueUserEmail')?.value;
  var removeUserEmail = $formValues.querySelector('.removeUserEmail')?.value === 'true';
  var setUserEmail = removeUserEmail ? null : $formValues.querySelector('.setUserEmail')?.value;
  var addUserEmail = $formValues.querySelector('.addUserEmail')?.value;
  if(removeUserEmail || setUserEmail != null && setUserEmail !== '')
    vals['setUserEmail'] = setUserEmail;
  if(addUserEmail != null && addUserEmail !== '')
    vals['addUserEmail'] = addUserEmail;
  var removeUserEmail = $formValues.querySelector('.removeUserEmail')?.value;
  if(removeUserEmail != null && removeUserEmail !== '')
    vals['removeUserEmail'] = removeUserEmail;

  var valueUserFirstName = $formValues.querySelector('.valueUserFirstName')?.value;
  var removeUserFirstName = $formValues.querySelector('.removeUserFirstName')?.value === 'true';
  var setUserFirstName = removeUserFirstName ? null : $formValues.querySelector('.setUserFirstName')?.value;
  var addUserFirstName = $formValues.querySelector('.addUserFirstName')?.value;
  if(removeUserFirstName || setUserFirstName != null && setUserFirstName !== '')
    vals['setUserFirstName'] = setUserFirstName;
  if(addUserFirstName != null && addUserFirstName !== '')
    vals['addUserFirstName'] = addUserFirstName;
  var removeUserFirstName = $formValues.querySelector('.removeUserFirstName')?.value;
  if(removeUserFirstName != null && removeUserFirstName !== '')
    vals['removeUserFirstName'] = removeUserFirstName;

  var valueUserLastName = $formValues.querySelector('.valueUserLastName')?.value;
  var removeUserLastName = $formValues.querySelector('.removeUserLastName')?.value === 'true';
  var setUserLastName = removeUserLastName ? null : $formValues.querySelector('.setUserLastName')?.value;
  var addUserLastName = $formValues.querySelector('.addUserLastName')?.value;
  if(removeUserLastName || setUserLastName != null && setUserLastName !== '')
    vals['setUserLastName'] = setUserLastName;
  if(addUserLastName != null && addUserLastName !== '')
    vals['addUserLastName'] = addUserLastName;
  var removeUserLastName = $formValues.querySelector('.removeUserLastName')?.value;
  if(removeUserLastName != null && removeUserLastName !== '')
    vals['removeUserLastName'] = removeUserLastName;

  var valueUserFullName = $formValues.querySelector('.valueUserFullName')?.value;
  var removeUserFullName = $formValues.querySelector('.removeUserFullName')?.value === 'true';
  var setUserFullName = removeUserFullName ? null : $formValues.querySelector('.setUserFullName')?.value;
  var addUserFullName = $formValues.querySelector('.addUserFullName')?.value;
  if(removeUserFullName || setUserFullName != null && setUserFullName !== '')
    vals['setUserFullName'] = setUserFullName;
  if(addUserFullName != null && addUserFullName !== '')
    vals['addUserFullName'] = addUserFullName;
  var removeUserFullName = $formValues.querySelector('.removeUserFullName')?.value;
  if(removeUserFullName != null && removeUserFullName !== '')
    vals['removeUserFullName'] = removeUserFullName;

  patchSiteUserVals(pk == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, target, success, error);
}

function patchSiteUserFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterObjectId = $formFilters.querySelector('.valueObjectId')?.value;
    if(filterObjectId != null && filterObjectId !== '')
      filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

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

    var $filterSeeArchivedCheckbox = $formFilters.querySelector('input.valueSeeArchived[type = "checkbox"]');
    var $filterSeeArchivedSelect = $formFilters.querySelector('select.valueSeeArchived');
    var filterSeeArchived = $filterSeeArchivedSelect.length ? $filterSeeArchivedSelect.value : $filterSeeArchivedCheckbox.checked;
    var filterSeeArchivedSelectVal = $formFilters.querySelector('select.filterSeeArchived')?.value;
    var filterSeeArchived = null;
    if(filterSeeArchivedSelectVal !== '')
      filterSeeArchived = filterSeeArchivedSelectVal == 'true';
    if(filterSeeArchived != null && filterSeeArchived === true)
      filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

    var $filterSeeDeletedCheckbox = $formFilters.querySelector('input.valueSeeDeleted[type = "checkbox"]');
    var $filterSeeDeletedSelect = $formFilters.querySelector('select.valueSeeDeleted');
    var filterSeeDeleted = $filterSeeDeletedSelect.length ? $filterSeeDeletedSelect.value : $filterSeeDeletedCheckbox.checked;
    var filterSeeDeletedSelectVal = $formFilters.querySelector('select.filterSeeDeleted')?.value;
    var filterSeeDeleted = null;
    if(filterSeeDeletedSelectVal !== '')
      filterSeeDeleted = filterSeeDeletedSelectVal == 'true';
    if(filterSeeDeleted != null && filterSeeDeleted === true)
      filters.push({ name: 'fq', value: 'seeDeleted:' + filterSeeDeleted });

    var filterInheritPk = $formFilters.querySelector('.valueInheritPk')?.value;
    if(filterInheritPk != null && filterInheritPk !== '')
      filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

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

    var filterObjectIcon = $formFilters.querySelector('.valueObjectIcon')?.value;
    if(filterObjectIcon != null && filterObjectIcon !== '')
      filters.push({ name: 'fq', value: 'objectIcon:' + filterObjectIcon });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlId = $formFilters.querySelector('.valuePageUrlId')?.value;
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

    var filterPageUrlPk = $formFilters.querySelector('.valuePageUrlPk')?.value;
    if(filterPageUrlPk != null && filterPageUrlPk !== '')
      filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

    var filterPageUrlApi = $formFilters.querySelector('.valuePageUrlApi')?.value;
    if(filterPageUrlApi != null && filterPageUrlApi !== '')
      filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterUserKeys = $formFilters.querySelector('.valueUserKeys')?.value;
    if(filterUserKeys != null && filterUserKeys !== '')
      filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

    var filterUserId = $formFilters.querySelector('.valueUserId')?.value;
    if(filterUserId != null && filterUserId !== '')
      filters.push({ name: 'fq', value: 'userId:' + filterUserId });

    var filterUserName = $formFilters.querySelector('.valueUserName')?.value;
    if(filterUserName != null && filterUserName !== '')
      filters.push({ name: 'fq', value: 'userName:' + filterUserName });

    var filterUserEmail = $formFilters.querySelector('.valueUserEmail')?.value;
    if(filterUserEmail != null && filterUserEmail !== '')
      filters.push({ name: 'fq', value: 'userEmail:' + filterUserEmail });

    var filterUserFirstName = $formFilters.querySelector('.valueUserFirstName')?.value;
    if(filterUserFirstName != null && filterUserFirstName !== '')
      filters.push({ name: 'fq', value: 'userFirstName:' + filterUserFirstName });

    var filterUserLastName = $formFilters.querySelector('.valueUserLastName')?.value;
    if(filterUserLastName != null && filterUserLastName !== '')
      filters.push({ name: 'fq', value: 'userLastName:' + filterUserLastName });

    var filterUserFullName = $formFilters.querySelector('.valueUserFullName')?.value;
    if(filterUserFullName != null && filterUserFullName !== '')
      filters.push({ name: 'fq', value: 'userFullName:' + filterUserFullName });
  }
  return filters;
}

function patchSiteUserVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchSiteUserVals(filters, vals, target, success, error);
}

function patchSiteUserVals(filters, vals, target, success, error) {
  fetch(
    '/api/user?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PATCH'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

// POST //

async function postSiteUser($formValues, target, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target);
      var url = data['pageUrlPk'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, textStatus, errorThrown ) {
      addError(target);
    };
  }

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  if(valuePk != null && valuePk !== '')
    vals['pk'] = valuePk;

  var valueObjectId = $formValues.querySelector('.valueObjectId')?.value;
  if(valueObjectId != null && valueObjectId !== '')
    vals['objectId'] = valueObjectId;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueSeeArchived = $formValues.querySelector('.valueSeeArchived')?.value;
  if(valueSeeArchived != null && valueSeeArchived !== '')
    vals['seeArchived'] = valueSeeArchived == 'true';

  var valueSeeDeleted = $formValues.querySelector('.valueSeeDeleted')?.value;
  if(valueSeeDeleted != null && valueSeeDeleted !== '')
    vals['seeDeleted'] = valueSeeDeleted == 'true';

  var valueInheritPk = $formValues.querySelector('.valueInheritPk')?.value;
  if(valueInheritPk != null && valueInheritPk !== '')
    vals['inheritPk'] = valueInheritPk;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  var valueUserId = $formValues.querySelector('.valueUserId')?.value;
  if(valueUserId != null && valueUserId !== '')
    vals['userId'] = valueUserId;

  var valueUserName = $formValues.querySelector('.valueUserName')?.value;
  if(valueUserName != null && valueUserName !== '')
    vals['userName'] = valueUserName;

  var valueUserEmail = $formValues.querySelector('.valueUserEmail')?.value;
  if(valueUserEmail != null && valueUserEmail !== '')
    vals['userEmail'] = valueUserEmail;

  var valueUserFirstName = $formValues.querySelector('.valueUserFirstName')?.value;
  if(valueUserFirstName != null && valueUserFirstName !== '')
    vals['userFirstName'] = valueUserFirstName;

  var valueUserLastName = $formValues.querySelector('.valueUserLastName')?.value;
  if(valueUserLastName != null && valueUserLastName !== '')
    vals['userLastName'] = valueUserLastName;

  var valueUserFullName = $formValues.querySelector('.valueUserFullName')?.value;
  if(valueUserFullName != null && valueUserFullName !== '')
    vals['userFullName'] = valueUserFullName;

  fetch(
    '/api/user'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

function postSiteUserVals(vals, target, success, error) {
  fetch(
    '/api/user'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

// PUTImport //

async function putimportSiteUser($formValues, target, pk, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportSiteUserVals(JSON.parse(json), target, success, error);
}

function putimportSiteUserVals(json, target, success, error) {
  fetch(
    '/api/user-import'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PUT'
      , body: JSON.stringify(json)
    }).then(response => {
      if(response.ok)
        success(response, target);
      else
        error(response, target);
    })
    .catch(response => error(response, target));
}

async function websocketSiteUser(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
      var json = JSON.parse(message['body']);
      var id = json['id'];
      var pk = json['pk'];
      var pkPage = document.querySelector('#Page_pk')?.value;
      var pks = json['pks'];
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
      iTemplate.innerHTML = '<i class="fa-duotone fa-solid fa-user-gear"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify site users in ' + json.timeRemaining;
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
      if(pk && pkPage && pk == pkPage) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketSiteUserInner(apiRequest) {
  var pk = apiRequest['pk'];
  var pks = apiRequest['pks'];
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
        var inputObjectId = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputSeeArchived = null;
        var inputSeeDeleted = null;
        var inputInheritPk = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectIcon = null;
        var inputObjectTitle = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputPageUrlId = null;
        var inputPageUrlPk = null;
        var inputPageUrlApi = null;
        var inputId = null;
        var inputUserKeys = null;
        var inputUserId = null;
        var inputUserName = null;
        var inputUserEmail = null;
        var inputUserFirstName = null;
        var inputUserLastName = null;
        var inputUserFullName = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('#Page_pk');
        if(vars.includes('objectId'))
          inputObjectId = $response.querySelector('#Page_objectId');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('#Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('#Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('#Page_archived');
        if(vars.includes('seeArchived'))
          inputSeeArchived = $response.querySelector('#Page_seeArchived');
        if(vars.includes('seeDeleted'))
          inputSeeDeleted = $response.querySelector('#Page_seeDeleted');
        if(vars.includes('inheritPk'))
          inputInheritPk = $response.querySelector('#Page_inheritPk');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('#Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('#Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('#Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('#Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('#Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('#Page_saves');
        if(vars.includes('objectIcon'))
          inputObjectIcon = $response.querySelector('#Page_objectIcon');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('#Page_objectTitle');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('#Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('#Page_objectText');
        if(vars.includes('pageUrlId'))
          inputPageUrlId = $response.querySelector('#Page_pageUrlId');
        if(vars.includes('pageUrlPk'))
          inputPageUrlPk = $response.querySelector('#Page_pageUrlPk');
        if(vars.includes('pageUrlApi'))
          inputPageUrlApi = $response.querySelector('#Page_pageUrlApi');
        if(vars.includes('id'))
          inputId = $response.querySelector('#Page_id');
        if(vars.includes('userKeys'))
          inputUserKeys = $response.querySelector('#Page_userKeys');
        if(vars.includes('userId'))
          inputUserId = $response.querySelector('#Page_userId');
        if(vars.includes('userName'))
          inputUserName = $response.querySelector('#Page_userName');
        if(vars.includes('userEmail'))
          inputUserEmail = $response.querySelector('#Page_userEmail');
        if(vars.includes('userFirstName'))
          inputUserFirstName = $response.querySelector('#Page_userFirstName');
        if(vars.includes('userLastName'))
          inputUserLastName = $response.querySelector('#Page_userLastName');
        if(vars.includes('userFullName'))
          inputUserFullName = $response.querySelector('#Page_userFullName');
          jsWebsocketSiteUser(pk, vars, $response);

          window.siteUser = JSON.parse($response.querySelector('.pageForm .siteUser')?.value);
          window.listSiteUser = JSON.parse($response.querySelector('.pageForm .listSiteUser')?.value);


        if(inputPk) {
          document.querySelectorAll('#Page_pk').forEach((item, index) => {
            item.setAttribute('value', inputPk.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pk'));
        }

        if(inputObjectId) {
          document.querySelectorAll('#Page_objectId').forEach((item, index) => {
            item.setAttribute('value', inputObjectId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_objectId'));
        }

        if(inputCreated) {
          document.querySelectorAll('#Page_created').forEach((item, index) => {
            item.setAttribute('value', inputCreated.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('#Page_modified').forEach((item, index) => {
            item.setAttribute('value', inputModified.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('#Page_archived').forEach((item, index) => {
            item.setAttribute('value', inputArchived.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_archived'));
        }

        if(inputSeeArchived) {
          document.querySelectorAll('#Page_seeArchived').forEach((item, index) => {
            item.setAttribute('value', inputSeeArchived.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_seeArchived'));
        }

        if(inputSeeDeleted) {
          document.querySelectorAll('#Page_seeDeleted').forEach((item, index) => {
            item.setAttribute('value', inputSeeDeleted.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_seeDeleted'));
        }

        if(inputInheritPk) {
          document.querySelectorAll('#Page_inheritPk').forEach((item, index) => {
            item.setAttribute('value', inputInheritPk.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_inheritPk'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('#Page_classCanonicalName').forEach((item, index) => {
            item.setAttribute('value', inputClassCanonicalName.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('#Page_classSimpleName').forEach((item, index) => {
            item.setAttribute('value', inputClassSimpleName.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('#Page_classCanonicalNames').forEach((item, index) => {
            item.setAttribute('value', inputClassCanonicalNames.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('#Page_sessionId').forEach((item, index) => {
            item.setAttribute('value', inputSessionId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('#Page_userKey').forEach((item, index) => {
            item.setAttribute('value', inputUserKey.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('#Page_saves').forEach((item, index) => {
            item.setAttribute('value', inputSaves.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_saves'));
        }

        if(inputObjectIcon) {
          document.querySelectorAll('#Page_objectIcon').forEach((item, index) => {
            item.setAttribute('value', inputObjectIcon.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_objectIcon'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('#Page_objectTitle').forEach((item, index) => {
            item.setAttribute('value', inputObjectTitle.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_objectTitle'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('#Page_objectSuggest').forEach((item, index) => {
            item.setAttribute('value', inputObjectSuggest.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('#Page_objectText').forEach((item, index) => {
            item.setAttribute('value', inputObjectText.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_objectText'));
        }

        if(inputPageUrlId) {
          document.querySelectorAll('#Page_pageUrlId').forEach((item, index) => {
            item.setAttribute('value', inputPageUrlId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pageUrlId'));
        }

        if(inputPageUrlPk) {
          document.querySelectorAll('#Page_pageUrlPk').forEach((item, index) => {
            item.setAttribute('value', inputPageUrlPk.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pageUrlPk'));
        }

        if(inputPageUrlApi) {
          document.querySelectorAll('#Page_pageUrlApi').forEach((item, index) => {
            item.setAttribute('value', inputPageUrlApi.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_pageUrlApi'));
        }

        if(inputId) {
          document.querySelectorAll('#Page_id').forEach((item, index) => {
            item.setAttribute('value', inputId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_id'));
        }

        if(inputUserKeys) {
          document.querySelectorAll('#Page_userKeys').forEach((item, index) => {
            item.setAttribute('value', inputUserKeys.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_userKeys'));
        }

        if(inputUserId) {
          document.querySelectorAll('#Page_userId').forEach((item, index) => {
            item.setAttribute('value', inputUserId.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_userId'));
        }

        if(inputUserName) {
          document.querySelectorAll('#Page_userName').forEach((item, index) => {
            item.setAttribute('value', inputUserName.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_userName'));
        }

        if(inputUserEmail) {
          document.querySelectorAll('#Page_userEmail').forEach((item, index) => {
            item.setAttribute('value', inputUserEmail.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_userEmail'));
        }

        if(inputUserFirstName) {
          document.querySelectorAll('#Page_userFirstName').forEach((item, index) => {
            item.setAttribute('value', inputUserFirstName.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_userFirstName'));
        }

        if(inputUserLastName) {
          document.querySelectorAll('#Page_userLastName').forEach((item, index) => {
            item.setAttribute('value', inputUserLastName.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_userLastName'));
        }

        if(inputUserFullName) {
          document.querySelectorAll('#Page_userFullName').forEach((item, index) => {
            item.setAttribute('value', inputUserFullName.getAttribute('value'));
          });
          addGlow(document.querySelector('#Page_userFullName'));
        }

          pageGraphSiteUser();
      });
    });
  }
}

function pageGraphSiteUser(apiRequest) {
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
        var pivot1VarObj = Object.values(window.varsFq).querySelector(o => o.varIndexed === pivot1VarIndexed);
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = 'site users';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).querySelector(o => o.varIndexed === pivot2VarIndexed);
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
        }
        Plotly.react('htmBodyGraphBaseModelPage', data, layout);
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqSiteUser_time').innerText = '';
  searchPage('SiteUser', function() {
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
      document.querySelector('#fqSiteUser_time').value = x;
      document.querySelector('#fqSiteUser_time').onchange();
      searchPage('SiteUser');
    }, speedRate);
  });
}


// Search //

async function searchSitePage($formFilters, success, error) {
  var filters = searchSitePageFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, textStatus, errorThrown ) {};

  searchSitePageVals(filters, target, success, error);
}

function searchSitePageFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var filterObjectId = $formFilters.querySelector('.valueObjectId')?.value;
    if(filterObjectId != null && filterObjectId !== '')
      filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var $filterDeletedCheckbox = $formFilters.querySelector('input.valueDeleted[type = "checkbox"]');
    var $filterDeletedSelect = $formFilters.querySelector('select.valueDeleted');
    var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.value : $filterDeletedCheckbox.checked;
    var filterDeletedSelectVal = $formFilters.querySelector('select.filterDeleted')?.value;
    var filterDeleted = null;
    if(filterDeletedSelectVal !== '')
      filterDeleted = filterDeletedSelectVal == 'true';
    if(filterDeleted != null && filterDeleted === true)
      filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

    var filterPageId = $formFilters.querySelector('.valuePageId')?.value;
    if(filterPageId != null && filterPageId !== '')
      filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

    var filterUri = $formFilters.querySelector('.valueUri')?.value;
    if(filterUri != null && filterUri !== '')
      filters.push({ name: 'fq', value: 'uri:' + filterUri });

    var filterUrl = $formFilters.querySelector('.valueUrl')?.value;
    if(filterUrl != null && filterUrl !== '')
      filters.push({ name: 'fq', value: 'url:' + filterUrl });

    var filterAuthor = $formFilters.querySelector('.valueAuthor')?.value;
    if(filterAuthor != null && filterAuthor !== '')
      filters.push({ name: 'fq', value: 'author:' + filterAuthor });

    var filterPageImageUri = $formFilters.querySelector('.valuePageImageUri')?.value;
    if(filterPageImageUri != null && filterPageImageUri !== '')
      filters.push({ name: 'fq', value: 'pageImageUri:' + filterPageImageUri });

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

    var filterCourseNum = $formFilters.querySelector('.valueCourseNum')?.value;
    if(filterCourseNum != null && filterCourseNum !== '')
      filters.push({ name: 'fq', value: 'courseNum:' + filterCourseNum });

    var filterLessonNum = $formFilters.querySelector('.valueLessonNum')?.value;
    if(filterLessonNum != null && filterLessonNum !== '')
      filters.push({ name: 'fq', value: 'lessonNum:' + filterLessonNum });

    var filterTitle = $formFilters.querySelector('.valueTitle')?.value;
    if(filterTitle != null && filterTitle !== '')
      filters.push({ name: 'fq', value: 'title:' + filterTitle });

    var filterResourceUri = $formFilters.querySelector('.valueResourceUri')?.value;
    if(filterResourceUri != null && filterResourceUri !== '')
      filters.push({ name: 'fq', value: 'resourceUri:' + filterResourceUri });

    var filterTemplateUri = $formFilters.querySelector('.valueTemplateUri')?.value;
    if(filterTemplateUri != null && filterTemplateUri !== '')
      filters.push({ name: 'fq', value: 'templateUri:' + filterTemplateUri });

    var filterH1 = $formFilters.querySelector('.valueH1')?.value;
    if(filterH1 != null && filterH1 !== '')
      filters.push({ name: 'fq', value: 'h1:' + filterH1 });

    var filterH2 = $formFilters.querySelector('.valueH2')?.value;
    if(filterH2 != null && filterH2 !== '')
      filters.push({ name: 'fq', value: 'h2:' + filterH2 });
  }
  return filters;
}

function searchSitePageVals(filters, target, success, error) {

  fetch(
    '/api/page?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestSitePageObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    $list.empty();
    data['list'].forEach((o, i) => {
      var $i = document.querySelector('<i class="fa-duotone fa-solid fa-newspaper"></i>');
      var $span = document.createElement('<span>').setAttribute('class', '').text(o['objectTitle']);
      var $li = document.createElement('<li>');
      var $a = document.createElement('<a>').setAttribute('href', o['pageUrlPk']);
      $a.append($i);
      $a.append($span);
      $li.append($a);
      $list.append($li);
    });
  };
  error = function( jqXhr, textStatus, errorThrown ) {};
  searchSitePageVals($formFilters, target, success, error);
}

// GET //

async function getSitePage() {
  fetch(
    '/api/page/' + id
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

// PATCH //

async function patchSitePage($formFilters, $formValues, id, success, error) {
  var filters = patchSitePageFilters($formFilters);

  var vals = {};

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

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  var removeArchived = $formValues.querySelector('.removeArchived')?.value === 'true';
  var valueArchivedSelectVal = $formValues.querySelector('select.setArchived')?.value;
  if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
    valueArchived = valueArchivedSelectVal == 'true';
  var setArchived = removeArchived ? null : valueArchived;
  var addArchived = $formValues.querySelector('.addArchived').checked;
  if(removeArchived || setArchived != null && setArchived !== '')
    vals['setArchived'] = setArchived;
  if(addArchived != null && addArchived !== '')
    vals['addArchived'] = addArchived;
  var removeArchived = $formValues.querySelector('.removeArchived').checked;
  if(removeArchived != null && removeArchived !== '')
    vals['removeArchived'] = removeArchived;

  var valueDeleted = $formValues.querySelector('.valueDeleted')?.value;
  var removeDeleted = $formValues.querySelector('.removeDeleted')?.value === 'true';
  var valueDeletedSelectVal = $formValues.querySelector('select.setDeleted')?.value;
  if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
    valueDeleted = valueDeletedSelectVal == 'true';
  var setDeleted = removeDeleted ? null : valueDeleted;
  var addDeleted = $formValues.querySelector('.addDeleted').checked;
  if(removeDeleted || setDeleted != null && setDeleted !== '')
    vals['setDeleted'] = setDeleted;
  if(addDeleted != null && addDeleted !== '')
    vals['addDeleted'] = addDeleted;
  var removeDeleted = $formValues.querySelector('.removeDeleted').checked;
  if(removeDeleted != null && removeDeleted !== '')
    vals['removeDeleted'] = removeDeleted;

  var valuePageId = $formValues.querySelector('.valuePageId')?.value;
  var removePageId = $formValues.querySelector('.removePageId')?.value === 'true';
  var setPageId = removePageId ? null : $formValues.querySelector('.setPageId')?.value;
  var addPageId = $formValues.querySelector('.addPageId')?.value;
  if(removePageId || setPageId != null && setPageId !== '')
    vals['setPageId'] = setPageId;
  if(addPageId != null && addPageId !== '')
    vals['addPageId'] = addPageId;
  var removePageId = $formValues.querySelector('.removePageId')?.value;
  if(removePageId != null && removePageId !== '')
    vals['removePageId'] = removePageId;

  var valueUri = $formValues.querySelector('.valueUri')?.value;
  var removeUri = $formValues.querySelector('.removeUri')?.value === 'true';
  var setUri = removeUri ? null : $formValues.querySelector('.setUri')?.value;
  var addUri = $formValues.querySelector('.addUri')?.value;
  if(removeUri || setUri != null && setUri !== '')
    vals['setUri'] = setUri;
  if(addUri != null && addUri !== '')
    vals['addUri'] = addUri;
  var removeUri = $formValues.querySelector('.removeUri')?.value;
  if(removeUri != null && removeUri !== '')
    vals['removeUri'] = removeUri;

  var valueUrl = $formValues.querySelector('.valueUrl')?.value;
  var removeUrl = $formValues.querySelector('.removeUrl')?.value === 'true';
  var setUrl = removeUrl ? null : $formValues.querySelector('.setUrl')?.value;
  var addUrl = $formValues.querySelector('.addUrl')?.value;
  if(removeUrl || setUrl != null && setUrl !== '')
    vals['setUrl'] = setUrl;
  if(addUrl != null && addUrl !== '')
    vals['addUrl'] = addUrl;
  var removeUrl = $formValues.querySelector('.removeUrl')?.value;
  if(removeUrl != null && removeUrl !== '')
    vals['removeUrl'] = removeUrl;

  var valueAuthor = $formValues.querySelector('.valueAuthor')?.value;
  var removeAuthor = $formValues.querySelector('.removeAuthor')?.value === 'true';
  var setAuthor = removeAuthor ? null : $formValues.querySelector('.setAuthor')?.value;
  var addAuthor = $formValues.querySelector('.addAuthor')?.value;
  if(removeAuthor || setAuthor != null && setAuthor !== '')
    vals['setAuthor'] = setAuthor;
  if(addAuthor != null && addAuthor !== '')
    vals['addAuthor'] = addAuthor;
  var removeAuthor = $formValues.querySelector('.removeAuthor')?.value;
  if(removeAuthor != null && removeAuthor !== '')
    vals['removeAuthor'] = removeAuthor;

  var valuePageImageUri = $formValues.querySelector('.valuePageImageUri')?.value;
  var removePageImageUri = $formValues.querySelector('.removePageImageUri')?.value === 'true';
  var setPageImageUri = removePageImageUri ? null : $formValues.querySelector('.setPageImageUri')?.value;
  var addPageImageUri = $formValues.querySelector('.addPageImageUri')?.value;
  if(removePageImageUri || setPageImageUri != null && setPageImageUri !== '')
    vals['setPageImageUri'] = setPageImageUri;
  if(addPageImageUri != null && addPageImageUri !== '')
    vals['addPageImageUri'] = addPageImageUri;
  var removePageImageUri = $formValues.querySelector('.removePageImageUri')?.value;
  if(removePageImageUri != null && removePageImageUri !== '')
    vals['removePageImageUri'] = removePageImageUri;

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

  var valueCourseNum = $formValues.querySelector('.valueCourseNum')?.value;
  var removeCourseNum = $formValues.querySelector('.removeCourseNum')?.value === 'true';
  var setCourseNum = removeCourseNum ? null : $formValues.querySelector('.setCourseNum')?.value;
  var addCourseNum = $formValues.querySelector('.addCourseNum')?.value;
  if(removeCourseNum || setCourseNum != null && setCourseNum !== '')
    vals['setCourseNum'] = setCourseNum;
  if(addCourseNum != null && addCourseNum !== '')
    vals['addCourseNum'] = addCourseNum;
  var removeCourseNum = $formValues.querySelector('.removeCourseNum')?.value;
  if(removeCourseNum != null && removeCourseNum !== '')
    vals['removeCourseNum'] = removeCourseNum;

  var valueLessonNum = $formValues.querySelector('.valueLessonNum')?.value;
  var removeLessonNum = $formValues.querySelector('.removeLessonNum')?.value === 'true';
  var setLessonNum = removeLessonNum ? null : $formValues.querySelector('.setLessonNum')?.value;
  var addLessonNum = $formValues.querySelector('.addLessonNum')?.value;
  if(removeLessonNum || setLessonNum != null && setLessonNum !== '')
    vals['setLessonNum'] = setLessonNum;
  if(addLessonNum != null && addLessonNum !== '')
    vals['addLessonNum'] = addLessonNum;
  var removeLessonNum = $formValues.querySelector('.removeLessonNum')?.value;
  if(removeLessonNum != null && removeLessonNum !== '')
    vals['removeLessonNum'] = removeLessonNum;

  var valueTitle = $formValues.querySelector('.valueTitle')?.value;
  var removeTitle = $formValues.querySelector('.removeTitle')?.value === 'true';
  var setTitle = removeTitle ? null : $formValues.querySelector('.setTitle')?.value;
  var addTitle = $formValues.querySelector('.addTitle')?.value;
  if(removeTitle || setTitle != null && setTitle !== '')
    vals['setTitle'] = setTitle;
  if(addTitle != null && addTitle !== '')
    vals['addTitle'] = addTitle;
  var removeTitle = $formValues.querySelector('.removeTitle')?.value;
  if(removeTitle != null && removeTitle !== '')
    vals['removeTitle'] = removeTitle;

  var valueResourceUri = $formValues.querySelector('.valueResourceUri')?.value;
  var removeResourceUri = $formValues.querySelector('.removeResourceUri')?.value === 'true';
  var setResourceUri = removeResourceUri ? null : $formValues.querySelector('.setResourceUri')?.value;
  var addResourceUri = $formValues.querySelector('.addResourceUri')?.value;
  if(removeResourceUri || setResourceUri != null && setResourceUri !== '')
    vals['setResourceUri'] = setResourceUri;
  if(addResourceUri != null && addResourceUri !== '')
    vals['addResourceUri'] = addResourceUri;
  var removeResourceUri = $formValues.querySelector('.removeResourceUri')?.value;
  if(removeResourceUri != null && removeResourceUri !== '')
    vals['removeResourceUri'] = removeResourceUri;

  var valueTemplateUri = $formValues.querySelector('.valueTemplateUri')?.value;
  var removeTemplateUri = $formValues.querySelector('.removeTemplateUri')?.value === 'true';
  var setTemplateUri = removeTemplateUri ? null : $formValues.querySelector('.setTemplateUri')?.value;
  var addTemplateUri = $formValues.querySelector('.addTemplateUri')?.value;
  if(removeTemplateUri || setTemplateUri != null && setTemplateUri !== '')
    vals['setTemplateUri'] = setTemplateUri;
  if(addTemplateUri != null && addTemplateUri !== '')
    vals['addTemplateUri'] = addTemplateUri;
  var removeTemplateUri = $formValues.querySelector('.removeTemplateUri')?.value;
  if(removeTemplateUri != null && removeTemplateUri !== '')
    vals['removeTemplateUri'] = removeTemplateUri;

  var valueH1 = $formValues.querySelector('.valueH1')?.value;
  var removeH1 = $formValues.querySelector('.removeH1')?.value === 'true';
  var setH1 = removeH1 ? null : $formValues.querySelector('.setH1')?.value;
  var addH1 = $formValues.querySelector('.addH1')?.value;
  if(removeH1 || setH1 != null && setH1 !== '')
    vals['setH1'] = setH1;
  if(addH1 != null && addH1 !== '')
    vals['addH1'] = addH1;
  var removeH1 = $formValues.querySelector('.removeH1')?.value;
  if(removeH1 != null && removeH1 !== '')
    vals['removeH1'] = removeH1;

  var valueH2 = $formValues.querySelector('.valueH2')?.value;
  var removeH2 = $formValues.querySelector('.removeH2')?.value === 'true';
  var setH2 = removeH2 ? null : $formValues.querySelector('.setH2')?.value;
  var addH2 = $formValues.querySelector('.addH2')?.value;
  if(removeH2 || setH2 != null && setH2 !== '')
    vals['setH2'] = setH2;
  if(addH2 != null && addH2 !== '')
    vals['addH2'] = addH2;
  var removeH2 = $formValues.querySelector('.removeH2')?.value;
  if(removeH2 != null && removeH2 !== '')
    vals['removeH2'] = removeH2;

  patchSitePageVals(id == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'id:' + id}], vals, target, success, error);
}

function patchSitePageFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var filterObjectId = $formFilters.querySelector('.valueObjectId')?.value;
    if(filterObjectId != null && filterObjectId !== '')
      filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var $filterDeletedCheckbox = $formFilters.querySelector('input.valueDeleted[type = "checkbox"]');
    var $filterDeletedSelect = $formFilters.querySelector('select.valueDeleted');
    var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.value : $filterDeletedCheckbox.checked;
    var filterDeletedSelectVal = $formFilters.querySelector('select.filterDeleted')?.value;
    var filterDeleted = null;
    if(filterDeletedSelectVal !== '')
      filterDeleted = filterDeletedSelectVal == 'true';
    if(filterDeleted != null && filterDeleted === true)
      filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

    var filterPageId = $formFilters.querySelector('.valuePageId')?.value;
    if(filterPageId != null && filterPageId !== '')
      filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

    var filterUri = $formFilters.querySelector('.valueUri')?.value;
    if(filterUri != null && filterUri !== '')
      filters.push({ name: 'fq', value: 'uri:' + filterUri });

    var filterUrl = $formFilters.querySelector('.valueUrl')?.value;
    if(filterUrl != null && filterUrl !== '')
      filters.push({ name: 'fq', value: 'url:' + filterUrl });

    var filterAuthor = $formFilters.querySelector('.valueAuthor')?.value;
    if(filterAuthor != null && filterAuthor !== '')
      filters.push({ name: 'fq', value: 'author:' + filterAuthor });

    var filterPageImageUri = $formFilters.querySelector('.valuePageImageUri')?.value;
    if(filterPageImageUri != null && filterPageImageUri !== '')
      filters.push({ name: 'fq', value: 'pageImageUri:' + filterPageImageUri });

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

    var filterCourseNum = $formFilters.querySelector('.valueCourseNum')?.value;
    if(filterCourseNum != null && filterCourseNum !== '')
      filters.push({ name: 'fq', value: 'courseNum:' + filterCourseNum });

    var filterLessonNum = $formFilters.querySelector('.valueLessonNum')?.value;
    if(filterLessonNum != null && filterLessonNum !== '')
      filters.push({ name: 'fq', value: 'lessonNum:' + filterLessonNum });

    var filterTitle = $formFilters.querySelector('.valueTitle')?.value;
    if(filterTitle != null && filterTitle !== '')
      filters.push({ name: 'fq', value: 'title:' + filterTitle });

    var filterResourceUri = $formFilters.querySelector('.valueResourceUri')?.value;
    if(filterResourceUri != null && filterResourceUri !== '')
      filters.push({ name: 'fq', value: 'resourceUri:' + filterResourceUri });

    var filterTemplateUri = $formFilters.querySelector('.valueTemplateUri')?.value;
    if(filterTemplateUri != null && filterTemplateUri !== '')
      filters.push({ name: 'fq', value: 'templateUri:' + filterTemplateUri });

    var filterH1 = $formFilters.querySelector('.valueH1')?.value;
    if(filterH1 != null && filterH1 !== '')
      filters.push({ name: 'fq', value: 'h1:' + filterH1 });

    var filterH2 = $formFilters.querySelector('.valueH2')?.value;
    if(filterH2 != null && filterH2 !== '')
      filters.push({ name: 'fq', value: 'h2:' + filterH2 });
  }
  return filters;
}

function patchSitePageVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchSitePageVals(filters, vals, target, success, error);
}

function patchSitePageVals(filters, vals, target, success, error) {
  fetch(
    '/api/page?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postSitePage($formValues, target, success, error) {
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

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueObjectId = $formValues.querySelector('.valueObjectId')?.value;
  if(valueObjectId != null && valueObjectId !== '')
    vals['objectId'] = valueObjectId;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueDeleted = $formValues.querySelector('.valueDeleted')?.value;
  if(valueDeleted != null && valueDeleted !== '')
    vals['deleted'] = valueDeleted == 'true';

  var valuePageId = $formValues.querySelector('.valuePageId')?.value;
  if(valuePageId != null && valuePageId !== '')
    vals['pageId'] = valuePageId;

  var valueUri = $formValues.querySelector('.valueUri')?.value;
  if(valueUri != null && valueUri !== '')
    vals['uri'] = valueUri;

  var valueUrl = $formValues.querySelector('.valueUrl')?.value;
  if(valueUrl != null && valueUrl !== '')
    vals['url'] = valueUrl;

  var valueAuthor = $formValues.querySelector('.valueAuthor')?.value;
  if(valueAuthor != null && valueAuthor !== '')
    vals['author'] = valueAuthor;

  var valuePageImageUri = $formValues.querySelector('.valuePageImageUri')?.value;
  if(valuePageImageUri != null && valuePageImageUri !== '')
    vals['pageImageUri'] = valuePageImageUri;

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

  var valueId = $formValues.querySelector('.valueId')?.value;
  if(valueId != null && valueId !== '')
    vals['id'] = valueId;

  var valueCourseNum = $formValues.querySelector('.valueCourseNum')?.value;
  if(valueCourseNum != null && valueCourseNum !== '')
    vals['courseNum'] = valueCourseNum;

  var valueLessonNum = $formValues.querySelector('.valueLessonNum')?.value;
  if(valueLessonNum != null && valueLessonNum !== '')
    vals['lessonNum'] = valueLessonNum;

  var valueTitle = $formValues.querySelector('.valueTitle')?.value;
  if(valueTitle != null && valueTitle !== '')
    vals['title'] = valueTitle;

  var valueResourceUri = $formValues.querySelector('.valueResourceUri')?.value;
  if(valueResourceUri != null && valueResourceUri !== '')
    vals['resourceUri'] = valueResourceUri;

  var valueTemplateUri = $formValues.querySelector('.valueTemplateUri')?.value;
  if(valueTemplateUri != null && valueTemplateUri !== '')
    vals['templateUri'] = valueTemplateUri;

  var valueH1 = $formValues.querySelector('.valueH1')?.value;
  if(valueH1 != null && valueH1 !== '')
    vals['h1'] = valueH1;

  var valueH2 = $formValues.querySelector('.valueH2')?.value;
  if(valueH2 != null && valueH2 !== '')
    vals['h2'] = valueH2;

  fetch(
    '/api/page'
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

function postSitePageVals(vals, target, success, error) {
  fetch(
    '/api/page'
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

async function putimportSitePage($formValues, id, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportSitePageVals(JSON.parse(json), target, success, error);
}

function putimportSitePageVals(json, target, success, error) {
  fetch(
    '/api/page-import'
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

async function websocketSitePage(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketSitePage', function (error, message) {
      var json = JSON.parse(message['body']);
      var id = json['id'];
      var pk = json['pk'];
      var pkPage = document.querySelector('#SitePageForm :input[name=id]')?.value;
      var pks = json['pks'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('<div>').setAttribute('class', 'w3-quarter box-' + id + ' ').setAttribute('id', 'box-' + id).setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('<div>').setAttribute('class', 'w3-margin ').setAttribute('id', 'margin-' + id);
      var $card = document.createElement('<div>').setAttribute('class', 'w3-card w3-white ').setAttribute('id', 'card-' + id);
      var $header = document.createElement('<div>').setAttribute('class', 'w3-container fa- ').setAttribute('id', 'header-' + id);
      var $i = document.createElement('<i class="fa-duotone fa-solid fa-newspaper"></i>');
      var $headerSpan = document.createElement('<span>').setAttribute('class', '').text('modify articles in ' + json.timeRemaining);
      var $x = document.createElement('<span>').setAttribute('class', 'w3-button w3-display-topright ').setAttribute('onclick', '$("#card-' + id + '").classList.add("display-none"); ').setAttribute('id', 'x-' + id);
      var $body = document.createElement('<div>').setAttribute('class', 'w3-container w3-padding ').setAttribute('id', 'text-' + id);
      var $bar = document.createElement('<div>').setAttribute('class', 'w3-light-gray ').setAttribute('id', 'bar-' + id);
      var $progress = document.createElement('<div>').setAttribute('class', 'w3- ').setAttribute('style', 'height: 24px; width: ' + percent + '; ').setAttribute('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
        if(!$old_box.size()) {
          document.querySelector('.top-box').append($box);
        } else if($old_box && $old_box.getAttribute('data-numPATCH') < numFound) {
          document.querySelector('.box-' + id).html($margin);
        }
      } else {
        document.querySelector('.box-' + id).remove();
      }
      if(pk && pkPage && pk == pkPage) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketSitePageInner(apiRequest) {
  var id = apiRequest['id'];
  var ids = apiRequest['ids'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(id != null && vars.length > 0) {
    var queryParams = "?" + $(".pageSearchVal").get().filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    $.get(uri, {}, function(data) {
      var $response = $("<html/>").html(data);
        var inputCreated = null;
        var inputModified = null;
        var inputObjectId = null;
        var inputArchived = null;
        var inputDeleted = null;
        var inputPageId = null;
        var inputUri = null;
        var inputUrl = null;
        var inputAuthor = null;
        var inputPageImageUri = null;
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
        var inputCourseNum = null;
        var inputLessonNum = null;
        var inputTitle = null;
        var inputResourceUri = null;
        var inputTemplateUri = null;
        var inputH1 = null;
        var inputH2 = null;

        if(vars.includes('created'))
          inputCreated = $response.querySelector('#Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('#Page_modified');
        if(vars.includes('objectId'))
          inputObjectId = $response.querySelector('#Page_objectId');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('#Page_archived');
        if(vars.includes('deleted'))
          inputDeleted = $response.querySelector('#Page_deleted');
        if(vars.includes('pageId'))
          inputPageId = $response.querySelector('#Page_pageId');
        if(vars.includes('uri'))
          inputUri = $response.querySelector('#Page_uri');
        if(vars.includes('url'))
          inputUrl = $response.querySelector('#Page_url');
        if(vars.includes('author'))
          inputAuthor = $response.querySelector('#Page_author');
        if(vars.includes('pageImageUri'))
          inputPageImageUri = $response.querySelector('#Page_pageImageUri');
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
        if(vars.includes('courseNum'))
          inputCourseNum = $response.querySelector('#Page_courseNum');
        if(vars.includes('lessonNum'))
          inputLessonNum = $response.querySelector('#Page_lessonNum');
        if(vars.includes('title'))
          inputTitle = $response.querySelector('#Page_title');
        if(vars.includes('resourceUri'))
          inputResourceUri = $response.querySelector('#Page_resourceUri');
        if(vars.includes('templateUri'))
          inputTemplateUri = $response.querySelector('#Page_templateUri');
        if(vars.includes('h1'))
          inputH1 = $response.querySelector('#Page_h1');
        if(vars.includes('h2'))
          inputH2 = $response.querySelector('#Page_h2');
        jsWebsocketSitePage(id, vars, $response);

        window.sitePage = JSON.parse($response.querySelector('.pageForm .sitePage')?.value);
        window.listSitePage = JSON.parse($response.querySelector('.pageForm .listSitePage')?.value);


        if(inputCreated) {
          inputCreated.replaceAll('#Page_created');
          addGlow(document.querySelector('#Page_created'));
        }

        if(inputModified) {
          inputModified.replaceAll('#Page_modified');
          addGlow(document.querySelector('#Page_modified'));
        }

        if(inputObjectId) {
          inputObjectId.replaceAll('#Page_objectId');
          addGlow(document.querySelector('#Page_objectId'));
        }

        if(inputArchived) {
          inputArchived.replaceAll('#Page_archived');
          addGlow(document.querySelector('#Page_archived'));
        }

        if(inputDeleted) {
          inputDeleted.replaceAll('#Page_deleted');
          addGlow(document.querySelector('#Page_deleted'));
        }

        if(inputPageId) {
          inputPageId.replaceAll('#Page_pageId');
          addGlow(document.querySelector('#Page_pageId'));
        }

        if(inputUri) {
          inputUri.replaceAll('#Page_uri');
          addGlow(document.querySelector('#Page_uri'));
        }

        if(inputUrl) {
          inputUrl.replaceAll('#Page_url');
          addGlow(document.querySelector('#Page_url'));
        }

        if(inputAuthor) {
          inputAuthor.replaceAll('#Page_author');
          addGlow(document.querySelector('#Page_author'));
        }

        if(inputPageImageUri) {
          inputPageImageUri.replaceAll('#Page_pageImageUri');
          addGlow(document.querySelector('#Page_pageImageUri'));
        }

        if(inputInheritPk) {
          inputInheritPk.replaceAll('#Page_inheritPk');
          addGlow(document.querySelector('#Page_inheritPk'));
        }

        if(inputClassCanonicalName) {
          inputClassCanonicalName.replaceAll('#Page_classCanonicalName');
          addGlow(document.querySelector('#Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          inputClassSimpleName.replaceAll('#Page_classSimpleName');
          addGlow(document.querySelector('#Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          inputClassCanonicalNames.replaceAll('#Page_classCanonicalNames');
          addGlow(document.querySelector('#Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          inputSessionId.replaceAll('#Page_sessionId');
          addGlow(document.querySelector('#Page_sessionId'));
        }

        if(inputUserKey) {
          inputUserKey.replaceAll('#Page_userKey');
          addGlow(document.querySelector('#Page_userKey'));
        }

        if(inputSaves) {
          inputSaves.replaceAll('#Page_saves');
          addGlow(document.querySelector('#Page_saves'));
        }

        if(inputObjectIcon) {
          inputObjectIcon.replaceAll('#Page_objectIcon');
          addGlow(document.querySelector('#Page_objectIcon'));
        }

        if(inputObjectTitle) {
          inputObjectTitle.replaceAll('#Page_objectTitle');
          addGlow(document.querySelector('#Page_objectTitle'));
        }

        if(inputObjectSuggest) {
          inputObjectSuggest.replaceAll('#Page_objectSuggest');
          addGlow(document.querySelector('#Page_objectSuggest'));
        }

        if(inputObjectText) {
          inputObjectText.replaceAll('#Page_objectText');
          addGlow(document.querySelector('#Page_objectText'));
        }

        if(inputPageUrlId) {
          inputPageUrlId.replaceAll('#Page_pageUrlId');
          addGlow(document.querySelector('#Page_pageUrlId'));
        }

        if(inputPageUrlPk) {
          inputPageUrlPk.replaceAll('#Page_pageUrlPk');
          addGlow(document.querySelector('#Page_pageUrlPk'));
        }

        if(inputPageUrlApi) {
          inputPageUrlApi.replaceAll('#Page_pageUrlApi');
          addGlow(document.querySelector('#Page_pageUrlApi'));
        }

        if(inputId) {
          inputId.replaceAll('#Page_id');
          addGlow(document.querySelector('#Page_id'));
        }

        if(inputCourseNum) {
          inputCourseNum.replaceAll('#Page_courseNum');
          addGlow(document.querySelector('#Page_courseNum'));
        }

        if(inputLessonNum) {
          inputLessonNum.replaceAll('#Page_lessonNum');
          addGlow(document.querySelector('#Page_lessonNum'));
        }

        if(inputTitle) {
          inputTitle.replaceAll('#Page_title');
          addGlow(document.querySelector('#Page_title'));
        }

        if(inputResourceUri) {
          inputResourceUri.replaceAll('#Page_resourceUri');
          addGlow(document.querySelector('#Page_resourceUri'));
        }

        if(inputTemplateUri) {
          inputTemplateUri.replaceAll('#Page_templateUri');
          addGlow(document.querySelector('#Page_templateUri'));
        }

        if(inputH1) {
          inputH1.replaceAll('#Page_h1');
          addGlow(document.querySelector('#Page_h1'));
        }

        if(inputH2) {
          inputH2.replaceAll('#Page_h2');
          addGlow(document.querySelector('#Page_h2'));
        }

        pageGraphSitePage();
    });
  }
}

function pageGraphSitePage(apiRequest) {
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
          layout['title'] = 'articles';
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
        Plotly.react('htmBodyGraphBaseResultPage', data, layout);
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqSitePage_time').text('');
  searchPage('SitePage', function() {
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
      document.querySelector('#fqSitePage_time').value = x;
      document.querySelector('#fqSitePage_time').onchange();
      searchPage('SitePage');
    }, speedRate);
  });
}

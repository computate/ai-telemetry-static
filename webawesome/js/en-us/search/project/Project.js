
async function websocketProject(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketProject', function (error, message) {
      var json = JSON.parse(message['body']);
      var projectResource = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + projectResource + ' ');
      $box.setAttribute('id', 'box-' + projectResource);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + projectResource);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + projectResource);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + projectResource);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-people-line"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify projects in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + projectResource + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + projectResource);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + projectResource);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + projectResource);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + projectResource);
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
        var $old_box = document.querySelector('.box-' + projectResource);
      } else {
        document.querySelector('.box-' + projectResource)?.remove();
      }
      if(projectResource) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketProjectInner(apiRequest) {
  var projectResource = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(projectResource != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputTenantResource = null;
        var inputHubId = null;
        var inputClusterName = null;
        var inputProjectName = null;
        var inputProjectDisplayName = null;
        var inputProjectTitle = null;
        var inputDescription = null;
        var inputProjectFieldOfScience = null;
        var inputProjectActive = null;
        var inputGpuEnabled = null;
        var inputVllmEnabled = null;
        var inputPodRestartCount = null;
        var inputPodsRestarting = null;
        var inputPodTerminatingCount = null;
        var inputPodsTerminating = null;
        var inputFullPvcsCount = null;
        var inputFullPvcs = null;
        var inputNamespaceTerminating = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputApiUrl = null;
        var inputDisplayPage = null;
        var inputEditPage = null;
        var inputUserPage = null;
        var inputDownload = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputSolrId = null;
        var inputLocalClusterName = null;
        var inputHubResource = null;
        var inputClusterResource = null;
        var inputProjectResource = null;
        var inputStatusPageTemplateUri = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Project_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Project_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Project_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Project_Page_archived');
        if(vars.includes('tenantResource'))
          inputTenantResource = $response.querySelector('.Project_Page_tenantResource');
        if(vars.includes('hubId'))
          inputHubId = $response.querySelector('.Project_Page_hubId');
        if(vars.includes('clusterName'))
          inputClusterName = $response.querySelector('.Project_Page_clusterName');
        if(vars.includes('projectName'))
          inputProjectName = $response.querySelector('.Project_Page_projectName');
        if(vars.includes('projectDisplayName'))
          inputProjectDisplayName = $response.querySelector('.Project_Page_projectDisplayName');
        if(vars.includes('projectTitle'))
          inputProjectTitle = $response.querySelector('.Project_Page_projectTitle');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.Project_Page_description');
        if(vars.includes('projectFieldOfScience'))
          inputProjectFieldOfScience = $response.querySelector('.Project_Page_projectFieldOfScience');
        if(vars.includes('projectActive'))
          inputProjectActive = $response.querySelector('.Project_Page_projectActive');
        if(vars.includes('gpuEnabled'))
          inputGpuEnabled = $response.querySelector('.Project_Page_gpuEnabled');
        if(vars.includes('vllmEnabled'))
          inputVllmEnabled = $response.querySelector('.Project_Page_vllmEnabled');
        if(vars.includes('podRestartCount'))
          inputPodRestartCount = $response.querySelector('.Project_Page_podRestartCount');
        if(vars.includes('podsRestarting'))
          inputPodsRestarting = $response.querySelector('.Project_Page_podsRestarting');
        if(vars.includes('podTerminatingCount'))
          inputPodTerminatingCount = $response.querySelector('.Project_Page_podTerminatingCount');
        if(vars.includes('podsTerminating'))
          inputPodsTerminating = $response.querySelector('.Project_Page_podsTerminating');
        if(vars.includes('fullPvcsCount'))
          inputFullPvcsCount = $response.querySelector('.Project_Page_fullPvcsCount');
        if(vars.includes('fullPvcs'))
          inputFullPvcs = $response.querySelector('.Project_Page_fullPvcs');
        if(vars.includes('namespaceTerminating'))
          inputNamespaceTerminating = $response.querySelector('.Project_Page_namespaceTerminating');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Project_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Project_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Project_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.Project_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.Project_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Project_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.Project_Page_objectTitle');
        if(vars.includes('apiUrl'))
          inputApiUrl = $response.querySelector('.Project_Page_apiUrl');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Project_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Project_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Project_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Project_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Project_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Project_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Project_Page_solrId');
        if(vars.includes('localClusterName'))
          inputLocalClusterName = $response.querySelector('.Project_Page_localClusterName');
        if(vars.includes('hubResource'))
          inputHubResource = $response.querySelector('.Project_Page_hubResource');
        if(vars.includes('clusterResource'))
          inputClusterResource = $response.querySelector('.Project_Page_clusterResource');
        if(vars.includes('projectResource'))
          inputProjectResource = $response.querySelector('.Project_Page_projectResource');
        if(vars.includes('statusPageTemplateUri'))
          inputStatusPageTemplateUri = $response.querySelector('.Project_Page_statusPageTemplateUri');

        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listProject = JSON.parse($response.querySelector('.pageForm .listProject')?.value);
        jsWebsocketProject(projectResource, vars, $response);


        if(inputPk) {
          document.querySelectorAll('.Project_Page_pk').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.Project_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.Project_Page_created').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.Project_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.Project_Page_modified').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.Project_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.Project_Page_archived').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.Project_Page_archived'));
        }

        if(inputTenantResource) {
          document.querySelectorAll('.Project_Page_tenantResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputTenantResource.getAttribute('value');
            else
              item.textContent = inputTenantResource.textContent;
          });
          addGlow(document.querySelector('.Project_Page_tenantResource'));
        }

        if(inputHubId) {
          document.querySelectorAll('.Project_Page_hubId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputHubId.getAttribute('value');
            else
              item.textContent = inputHubId.textContent;
          });
          addGlow(document.querySelector('.Project_Page_hubId'));
        }

        if(inputClusterName) {
          document.querySelectorAll('.Project_Page_clusterName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClusterName.getAttribute('value');
            else
              item.textContent = inputClusterName.textContent;
          });
          addGlow(document.querySelector('.Project_Page_clusterName'));
        }

        if(inputProjectName) {
          document.querySelectorAll('.Project_Page_projectName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProjectName.getAttribute('value');
            else
              item.textContent = inputProjectName.textContent;
          });
          addGlow(document.querySelector('.Project_Page_projectName'));
        }

        if(inputProjectDisplayName) {
          document.querySelectorAll('.Project_Page_projectDisplayName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProjectDisplayName.getAttribute('value');
            else
              item.textContent = inputProjectDisplayName.textContent;
          });
          addGlow(document.querySelector('.Project_Page_projectDisplayName'));
        }

        if(inputProjectTitle) {
          document.querySelectorAll('.Project_Page_projectTitle').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProjectTitle.getAttribute('value');
            else
              item.textContent = inputProjectTitle.textContent;
          });
          addGlow(document.querySelector('.Project_Page_projectTitle'));
        }

        if(inputDescription) {
          document.querySelectorAll('.Project_Page_description').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDescription.getAttribute('value');
            else
              item.textContent = inputDescription.textContent;
          });
          addGlow(document.querySelector('.Project_Page_description'));
        }

        if(inputProjectFieldOfScience) {
          document.querySelectorAll('.Project_Page_projectFieldOfScience').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProjectFieldOfScience.getAttribute('value');
            else
              item.textContent = inputProjectFieldOfScience.textContent;
          });
          addGlow(document.querySelector('.Project_Page_projectFieldOfScience'));
        }

        if(inputProjectActive) {
          document.querySelectorAll('.Project_Page_projectActive').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProjectActive.getAttribute('value');
            else
              item.textContent = inputProjectActive.textContent;
          });
          addGlow(document.querySelector('.Project_Page_projectActive'));
        }

        if(inputGpuEnabled) {
          document.querySelectorAll('.Project_Page_gpuEnabled').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputGpuEnabled.getAttribute('value');
            else
              item.textContent = inputGpuEnabled.textContent;
          });
          addGlow(document.querySelector('.Project_Page_gpuEnabled'));
        }

        if(inputVllmEnabled) {
          document.querySelectorAll('.Project_Page_vllmEnabled').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputVllmEnabled.getAttribute('value');
            else
              item.textContent = inputVllmEnabled.textContent;
          });
          addGlow(document.querySelector('.Project_Page_vllmEnabled'));
        }

        if(inputPodRestartCount) {
          document.querySelectorAll('.Project_Page_podRestartCount').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputPodRestartCount.getAttribute('value');
            else
              item.textContent = inputPodRestartCount.textContent;
          });
          addGlow(document.querySelector('.Project_Page_podRestartCount'));
        }

        if(inputPodsRestarting) {
          document.querySelectorAll('.Project_Page_podsRestarting').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputPodsRestarting.getAttribute('value');
            else
              item.textContent = inputPodsRestarting.textContent;
          });
          addGlow(document.querySelector('.Project_Page_podsRestarting'));
        }

        if(inputPodTerminatingCount) {
          document.querySelectorAll('.Project_Page_podTerminatingCount').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputPodTerminatingCount.getAttribute('value');
            else
              item.textContent = inputPodTerminatingCount.textContent;
          });
          addGlow(document.querySelector('.Project_Page_podTerminatingCount'));
        }

        if(inputPodsTerminating) {
          document.querySelectorAll('.Project_Page_podsTerminating').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputPodsTerminating.getAttribute('value');
            else
              item.textContent = inputPodsTerminating.textContent;
          });
          addGlow(document.querySelector('.Project_Page_podsTerminating'));
        }

        if(inputFullPvcsCount) {
          document.querySelectorAll('.Project_Page_fullPvcsCount').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputFullPvcsCount.getAttribute('value');
            else
              item.textContent = inputFullPvcsCount.textContent;
          });
          addGlow(document.querySelector('.Project_Page_fullPvcsCount'));
        }

        if(inputFullPvcs) {
          document.querySelectorAll('.Project_Page_fullPvcs').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputFullPvcs.getAttribute('value');
            else
              item.textContent = inputFullPvcs.textContent;
          });
          addGlow(document.querySelector('.Project_Page_fullPvcs'));
        }

        if(inputNamespaceTerminating) {
          document.querySelectorAll('.Project_Page_namespaceTerminating').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputNamespaceTerminating.getAttribute('value');
            else
              item.textContent = inputNamespaceTerminating.textContent;
          });
          addGlow(document.querySelector('.Project_Page_namespaceTerminating'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.Project_Page_classCanonicalName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.Project_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.Project_Page_classSimpleName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.Project_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.Project_Page_classCanonicalNames').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.Project_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.Project_Page_sessionId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.Project_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.Project_Page_userKey').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.Project_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.Project_Page_saves').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.Project_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.Project_Page_objectTitle').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.Project_Page_objectTitle'));
        }

        if(inputApiUrl) {
          document.querySelectorAll('.Project_Page_apiUrl').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputApiUrl.getAttribute('value');
            else
              item.textContent = inputApiUrl.textContent;
          });
          addGlow(document.querySelector('.Project_Page_apiUrl'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.Project_Page_displayPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.Project_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.Project_Page_editPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.Project_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.Project_Page_userPage').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.Project_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.Project_Page_download').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.Project_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.Project_Page_objectSuggest').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.Project_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.Project_Page_objectText').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.Project_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.Project_Page_solrId').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.Project_Page_solrId'));
        }

        if(inputLocalClusterName) {
          document.querySelectorAll('.Project_Page_localClusterName').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputLocalClusterName.getAttribute('value');
            else
              item.textContent = inputLocalClusterName.textContent;
          });
          addGlow(document.querySelector('.Project_Page_localClusterName'));
        }

        if(inputHubResource) {
          document.querySelectorAll('.Project_Page_hubResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputHubResource.getAttribute('value');
            else
              item.textContent = inputHubResource.textContent;
          });
          addGlow(document.querySelector('.Project_Page_hubResource'));
        }

        if(inputClusterResource) {
          document.querySelectorAll('.Project_Page_clusterResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputClusterResource.getAttribute('value');
            else
              item.textContent = inputClusterResource.textContent;
          });
          addGlow(document.querySelector('.Project_Page_clusterResource'));
        }

        if(inputProjectResource) {
          document.querySelectorAll('.Project_Page_projectResource').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputProjectResource.getAttribute('value');
            else
              item.textContent = inputProjectResource.textContent;
          });
          addGlow(document.querySelector('.Project_Page_projectResource'));
        }

        if(inputStatusPageTemplateUri) {
          document.querySelectorAll('.Project_Page_statusPageTemplateUri').forEach((item, index) => {
            if(item.shadowRoot.querySelector('div.site-message-response-overlay')) {
              item.shadowRoot.querySelector('div.site-message-response-overlay')?.remove();
              item.removeAttribute('readonly');
            }
            if(typeof item.value !== 'undefined')
              item.value = inputStatusPageTemplateUri.getAttribute('value');
            else
              item.textContent = inputStatusPageTemplateUri.textContent;
          });
          addGlow(document.querySelector('.Project_Page_statusPageTemplateUri'));
        }

          pageGraphProject();
      });
    });
  }
}

function pageGraphProject(apiRequest) {
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
          layout['title'] = 'projects';
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
          Plotly.react('htmBodyGraphProjectPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqProject_time').innerText = '';
  searchPage('Project', function() {
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
      document.querySelector('#fqProject_time').value = x;
      document.querySelector('#fqProject_time').onchange();
      searchPage('Project');
    }, speedRate);
  });
}

// Search //

async function searchProject($formFilters, success, error) {
  var filters = searchProjectFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchProjectVals(filters, target, success, error);
}

function searchProjectFilters($formFilters) {
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

    var filterTenantResource = $formFilters.querySelector('.valueTenantResource')?.value;
    if(filterTenantResource != null && filterTenantResource !== '')
      filters.push({ name: 'fq', value: 'tenantResource:' + filterTenantResource });

    var filterHubId = $formFilters.querySelector('.valueHubId')?.value;
    if(filterHubId != null && filterHubId !== '')
      filters.push({ name: 'fq', value: 'hubId:' + filterHubId });

    var filterClusterName = $formFilters.querySelector('.valueClusterName')?.value;
    if(filterClusterName != null && filterClusterName !== '')
      filters.push({ name: 'fq', value: 'clusterName:' + filterClusterName });

    var filterProjectName = $formFilters.querySelector('.valueProjectName')?.value;
    if(filterProjectName != null && filterProjectName !== '')
      filters.push({ name: 'fq', value: 'projectName:' + filterProjectName });

    var filterProjectDisplayName = $formFilters.querySelector('.valueProjectDisplayName')?.value;
    if(filterProjectDisplayName != null && filterProjectDisplayName !== '')
      filters.push({ name: 'fq', value: 'projectDisplayName:' + filterProjectDisplayName });

    var filterProjectTitle = $formFilters.querySelector('.valueProjectTitle')?.value;
    if(filterProjectTitle != null && filterProjectTitle !== '')
      filters.push({ name: 'fq', value: 'projectTitle:' + filterProjectTitle });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterProjectFieldOfScience = $formFilters.querySelector('.valueProjectFieldOfScience')?.value;
    if(filterProjectFieldOfScience != null && filterProjectFieldOfScience !== '')
      filters.push({ name: 'fq', value: 'projectFieldOfScience:' + filterProjectFieldOfScience });

    var $filterProjectActiveCheckbox = $formFilters.querySelector('input.valueProjectActive[type = "checkbox"]');
    var $filterProjectActiveSelect = $formFilters.querySelector('select.valueProjectActive');
    var filterProjectActive = $filterProjectActiveSelect.length ? $filterProjectActiveSelect.value : $filterProjectActiveCheckbox.checked;
    var filterProjectActiveSelectVal = $formFilters.querySelector('select.filterProjectActive')?.value;
    var filterProjectActive = null;
    if(filterProjectActiveSelectVal !== '')
      filterProjectActive = filterProjectActiveSelectVal == 'true';
    if(filterProjectActive != null && filterProjectActive === true)
      filters.push({ name: 'fq', value: 'projectActive:' + filterProjectActive });

    var $filterGpuEnabledCheckbox = $formFilters.querySelector('input.valueGpuEnabled[type = "checkbox"]');
    var $filterGpuEnabledSelect = $formFilters.querySelector('select.valueGpuEnabled');
    var filterGpuEnabled = $filterGpuEnabledSelect.length ? $filterGpuEnabledSelect.value : $filterGpuEnabledCheckbox.checked;
    var filterGpuEnabledSelectVal = $formFilters.querySelector('select.filterGpuEnabled')?.value;
    var filterGpuEnabled = null;
    if(filterGpuEnabledSelectVal !== '')
      filterGpuEnabled = filterGpuEnabledSelectVal == 'true';
    if(filterGpuEnabled != null && filterGpuEnabled === true)
      filters.push({ name: 'fq', value: 'gpuEnabled:' + filterGpuEnabled });

    var $filterVllmEnabledCheckbox = $formFilters.querySelector('input.valueVllmEnabled[type = "checkbox"]');
    var $filterVllmEnabledSelect = $formFilters.querySelector('select.valueVllmEnabled');
    var filterVllmEnabled = $filterVllmEnabledSelect.length ? $filterVllmEnabledSelect.value : $filterVllmEnabledCheckbox.checked;
    var filterVllmEnabledSelectVal = $formFilters.querySelector('select.filterVllmEnabled')?.value;
    var filterVllmEnabled = null;
    if(filterVllmEnabledSelectVal !== '')
      filterVllmEnabled = filterVllmEnabledSelectVal == 'true';
    if(filterVllmEnabled != null && filterVllmEnabled === true)
      filters.push({ name: 'fq', value: 'vllmEnabled:' + filterVllmEnabled });

    var filterPodRestartCount = $formFilters.querySelector('.valuePodRestartCount')?.value;
    if(filterPodRestartCount != null && filterPodRestartCount !== '')
      filters.push({ name: 'fq', value: 'podRestartCount:' + filterPodRestartCount });

    var filterPodsRestarting = $formFilters.querySelector('.valuePodsRestarting')?.value;
    if(filterPodsRestarting != null && filterPodsRestarting !== '')
      filters.push({ name: 'fq', value: 'podsRestarting:' + filterPodsRestarting });

    var filterPodTerminatingCount = $formFilters.querySelector('.valuePodTerminatingCount')?.value;
    if(filterPodTerminatingCount != null && filterPodTerminatingCount !== '')
      filters.push({ name: 'fq', value: 'podTerminatingCount:' + filterPodTerminatingCount });

    var filterPodsTerminating = $formFilters.querySelector('.valuePodsTerminating')?.value;
    if(filterPodsTerminating != null && filterPodsTerminating !== '')
      filters.push({ name: 'fq', value: 'podsTerminating:' + filterPodsTerminating });

    var filterFullPvcsCount = $formFilters.querySelector('.valueFullPvcsCount')?.value;
    if(filterFullPvcsCount != null && filterFullPvcsCount !== '')
      filters.push({ name: 'fq', value: 'fullPvcsCount:' + filterFullPvcsCount });

    var filterFullPvcs = $formFilters.querySelector('.valueFullPvcs')?.value;
    if(filterFullPvcs != null && filterFullPvcs !== '')
      filters.push({ name: 'fq', value: 'fullPvcs:' + filterFullPvcs });

    var $filterNamespaceTerminatingCheckbox = $formFilters.querySelector('input.valueNamespaceTerminating[type = "checkbox"]');
    var $filterNamespaceTerminatingSelect = $formFilters.querySelector('select.valueNamespaceTerminating');
    var filterNamespaceTerminating = $filterNamespaceTerminatingSelect.length ? $filterNamespaceTerminatingSelect.value : $filterNamespaceTerminatingCheckbox.checked;
    var filterNamespaceTerminatingSelectVal = $formFilters.querySelector('select.filterNamespaceTerminating')?.value;
    var filterNamespaceTerminating = null;
    if(filterNamespaceTerminatingSelectVal !== '')
      filterNamespaceTerminating = filterNamespaceTerminatingSelectVal == 'true';
    if(filterNamespaceTerminating != null && filterNamespaceTerminating === true)
      filters.push({ name: 'fq', value: 'namespaceTerminating:' + filterNamespaceTerminating });

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

    var filterApiUrl = $formFilters.querySelector('.valueApiUrl')?.value;
    if(filterApiUrl != null && filterApiUrl !== '')
      filters.push({ name: 'fq', value: 'apiUrl:' + filterApiUrl });

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

    var filterLocalClusterName = $formFilters.querySelector('.valueLocalClusterName')?.value;
    if(filterLocalClusterName != null && filterLocalClusterName !== '')
      filters.push({ name: 'fq', value: 'localClusterName:' + filterLocalClusterName });

    var filterHubResource = $formFilters.querySelector('.valueHubResource')?.value;
    if(filterHubResource != null && filterHubResource !== '')
      filters.push({ name: 'fq', value: 'hubResource:' + filterHubResource });

    var filterClusterResource = $formFilters.querySelector('.valueClusterResource')?.value;
    if(filterClusterResource != null && filterClusterResource !== '')
      filters.push({ name: 'fq', value: 'clusterResource:' + filterClusterResource });

    var filterProjectResource = $formFilters.querySelector('.valueProjectResource')?.value;
    if(filterProjectResource != null && filterProjectResource !== '')
      filters.push({ name: 'fq', value: 'projectResource:' + filterProjectResource });

    var filterStatusPageTemplateUri = $formFilters.querySelector('.valueStatusPageTemplateUri')?.value;
    if(filterStatusPageTemplateUri != null && filterStatusPageTemplateUri !== '')
      filters.push({ name: 'fq', value: 'statusPageTemplateUri:' + filterStatusPageTemplateUri });
  }
  return filters;
}

function searchProjectVals(filters, target, success, error) {


  fetch(
    '/en-us/api/project?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestProjectTenantResource(filters, $list, projectResourceProject = null, tenantResource = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-buildings"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('class', 'wa-flank wa-gap-xs ');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var inputVar = 'tenantResource';
        var val = o[inputVar];
        var checked = val == null ? false : (tenantResource != null && val === tenantResource.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_tenantResource_' + projectResourceProject + '_tenantResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueTenantResource ');
        if(projectResourceProject != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchProjectVals([{ name: 'fq', value: 'projectResource:' + projectResourceProject }], { [(event.target.checked ? 'set' : 'remove') + 'TenantResource']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestProjectTenantResource(filters, $list, projectResourceProject, o[inputVar], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        } else {
          $input.addEventListener('change', function(event) {
            if(event.target.checked) {
              target.value = event.target.value;
            } else {
              target.value = null;
            }
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        $li.setAttribute('class', 'wa-flank wa-gap-0 ');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  if (typeof searchTenantVals === 'function') {
    searchTenantVals(filters, target, success, error);
  }
}

function suggestProjectHubResource(filters, $list, projectResourceProject = null, hubResource = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-sitemap"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('class', 'wa-flank wa-gap-xs ');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var inputVar = 'hubResource';
        var val = o[inputVar];
        var checked = val == null ? false : (hubResource != null && val === hubResource.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_hubResource_' + projectResourceProject + '_hubResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueHubResource ');
        if(projectResourceProject != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchProjectVals([{ name: 'fq', value: 'projectResource:' + projectResourceProject }], { [(event.target.checked ? 'set' : 'remove') + 'HubResource']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestProjectHubResource(filters, $list, projectResourceProject, o[inputVar], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        } else {
          $input.addEventListener('change', function(event) {
            if(event.target.checked) {
              target.value = event.target.value;
            } else {
              target.value = null;
            }
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        $li.setAttribute('class', 'wa-flank wa-gap-0 ');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  if (typeof searchHubVals === 'function') {
    searchHubVals(filters, target, success, error);
  }
}

function suggestProjectClusterResource(filters, $list, projectResourceProject = null, clusterResource = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="' + window.FONTAWESOME_STYLE + ' fa-server"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('class', 'wa-flank wa-gap-xs ');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var inputVar = 'clusterResource';
        var val = o[inputVar];
        var checked = val == null ? false : (clusterResource != null && val === clusterResource.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_clusterResource_' + projectResourceProject + '_clusterResource_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueClusterResource ');
        if(projectResourceProject != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchProjectVals([{ name: 'fq', value: 'projectResource:' + projectResourceProject }], { [(event.target.checked ? 'set' : 'remove') + 'ClusterResource']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestProjectClusterResource(filters, $list, projectResourceProject, o[inputVar], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        } else {
          $input.addEventListener('change', function(event) {
            if(event.target.checked) {
              target.value = event.target.value;
            } else {
              target.value = null;
            }
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        $li.setAttribute('class', 'wa-flank wa-gap-0 ');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  if (typeof searchClusterVals === 'function') {
    searchClusterVals(filters, target, success, error);
  }
}

function suggestProjectObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="{{ FONTAWESOME_STYLE }} fa-people-line"></i>');
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
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
  searchProjectVals($formFilters, target, success, error);
}

// GET //

async function getProject(pk) {
  fetch(
    '/en-us/api/project/' + projectResource
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

async function patchProject($formFilters, $formValues, target, projectResource, success, error) {
  var filters = patchProjectFilters($formFilters);

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

  var valueTenantResource = (Array.from($formValues.querySelectorAll('.valueTenantResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueTenantResource != null && valueTenantResource !== '')
    vals['setTenantResource'] = valueTenantResource;

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

  var valueProjectName = $formValues.querySelector('.valueProjectName')?.value;
  var removeProjectName = $formValues.querySelector('.removeProjectName')?.value === 'true';
  var setProjectName = removeProjectName ? null : $formValues.querySelector('.setProjectName')?.value;
  var addProjectName = $formValues.querySelector('.addProjectName')?.value;
  if(removeProjectName || setProjectName != null && setProjectName !== '')
    vals['setProjectName'] = setProjectName;
  if(addProjectName != null && addProjectName !== '')
    vals['addProjectName'] = addProjectName;
  var removeProjectName = $formValues.querySelector('.removeProjectName')?.value;
  if(removeProjectName != null && removeProjectName !== '')
    vals['removeProjectName'] = removeProjectName;

  var valueProjectDisplayName = $formValues.querySelector('.valueProjectDisplayName')?.value;
  var removeProjectDisplayName = $formValues.querySelector('.removeProjectDisplayName')?.value === 'true';
  var setProjectDisplayName = removeProjectDisplayName ? null : $formValues.querySelector('.setProjectDisplayName')?.value;
  var addProjectDisplayName = $formValues.querySelector('.addProjectDisplayName')?.value;
  if(removeProjectDisplayName || setProjectDisplayName != null && setProjectDisplayName !== '')
    vals['setProjectDisplayName'] = setProjectDisplayName;
  if(addProjectDisplayName != null && addProjectDisplayName !== '')
    vals['addProjectDisplayName'] = addProjectDisplayName;
  var removeProjectDisplayName = $formValues.querySelector('.removeProjectDisplayName')?.value;
  if(removeProjectDisplayName != null && removeProjectDisplayName !== '')
    vals['removeProjectDisplayName'] = removeProjectDisplayName;

  var valueProjectTitle = $formValues.querySelector('.valueProjectTitle')?.value;
  var removeProjectTitle = $formValues.querySelector('.removeProjectTitle')?.value === 'true';
  var setProjectTitle = removeProjectTitle ? null : $formValues.querySelector('.setProjectTitle')?.value;
  var addProjectTitle = $formValues.querySelector('.addProjectTitle')?.value;
  if(removeProjectTitle || setProjectTitle != null && setProjectTitle !== '')
    vals['setProjectTitle'] = setProjectTitle;
  if(addProjectTitle != null && addProjectTitle !== '')
    vals['addProjectTitle'] = addProjectTitle;
  var removeProjectTitle = $formValues.querySelector('.removeProjectTitle')?.value;
  if(removeProjectTitle != null && removeProjectTitle !== '')
    vals['removeProjectTitle'] = removeProjectTitle;

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

  var valueProjectFieldOfScience = $formValues.querySelector('.valueProjectFieldOfScience')?.value;
  var removeProjectFieldOfScience = $formValues.querySelector('.removeProjectFieldOfScience')?.value === 'true';
  var setProjectFieldOfScience = removeProjectFieldOfScience ? null : $formValues.querySelector('.setProjectFieldOfScience')?.value;
  var addProjectFieldOfScience = $formValues.querySelector('.addProjectFieldOfScience')?.value;
  if(removeProjectFieldOfScience || setProjectFieldOfScience != null && setProjectFieldOfScience !== '')
    vals['setProjectFieldOfScience'] = setProjectFieldOfScience;
  if(addProjectFieldOfScience != null && addProjectFieldOfScience !== '')
    vals['addProjectFieldOfScience'] = addProjectFieldOfScience;
  var removeProjectFieldOfScience = $formValues.querySelector('.removeProjectFieldOfScience')?.value;
  if(removeProjectFieldOfScience != null && removeProjectFieldOfScience !== '')
    vals['removeProjectFieldOfScience'] = removeProjectFieldOfScience;

  var valueProjectActive = $formValues.querySelector('.valueProjectActive')?.value;
  var removeProjectActive = $formValues.querySelector('.removeProjectActive')?.value === 'true';
  if(valueProjectActive != null)
    valueProjectActive = valueProjectActive === 'true';
  var valueProjectActiveSelectVal = $formValues.querySelector('select.setProjectActive')?.value;
  if(valueProjectActiveSelectVal != null)
    valueProjectActiveSelectVal = valueProjectActiveSelectVal === 'true';
  if(valueProjectActiveSelectVal != null && valueProjectActiveSelectVal !== '')
    valueProjectActive = valueProjectActiveSelectVal == 'true';
  var setProjectActive = removeProjectActive ? null : valueProjectActive;
  var addProjectActive = $formValues.querySelector('.addProjectActive')?.checked;
  if(removeProjectActive || setProjectActive != null && setProjectActive !== '')
    vals['setProjectActive'] = setProjectActive;
  if(addProjectActive != null && addProjectActive !== '')
    vals['addProjectActive'] = addProjectActive;
  var removeProjectActive = $formValues.querySelector('.removeProjectActive')?.checked;
  if(removeProjectActive != null && removeProjectActive !== '')
    vals['removeProjectActive'] = removeProjectActive;

  var valueGpuEnabled = $formValues.querySelector('.valueGpuEnabled')?.value;
  var removeGpuEnabled = $formValues.querySelector('.removeGpuEnabled')?.value === 'true';
  if(valueGpuEnabled != null)
    valueGpuEnabled = valueGpuEnabled === 'true';
  var valueGpuEnabledSelectVal = $formValues.querySelector('select.setGpuEnabled')?.value;
  if(valueGpuEnabledSelectVal != null)
    valueGpuEnabledSelectVal = valueGpuEnabledSelectVal === 'true';
  if(valueGpuEnabledSelectVal != null && valueGpuEnabledSelectVal !== '')
    valueGpuEnabled = valueGpuEnabledSelectVal == 'true';
  var setGpuEnabled = removeGpuEnabled ? null : valueGpuEnabled;
  var addGpuEnabled = $formValues.querySelector('.addGpuEnabled')?.checked;
  if(removeGpuEnabled || setGpuEnabled != null && setGpuEnabled !== '')
    vals['setGpuEnabled'] = setGpuEnabled;
  if(addGpuEnabled != null && addGpuEnabled !== '')
    vals['addGpuEnabled'] = addGpuEnabled;
  var removeGpuEnabled = $formValues.querySelector('.removeGpuEnabled')?.checked;
  if(removeGpuEnabled != null && removeGpuEnabled !== '')
    vals['removeGpuEnabled'] = removeGpuEnabled;

  var valueVllmEnabled = $formValues.querySelector('.valueVllmEnabled')?.value;
  var removeVllmEnabled = $formValues.querySelector('.removeVllmEnabled')?.value === 'true';
  if(valueVllmEnabled != null)
    valueVllmEnabled = valueVllmEnabled === 'true';
  var valueVllmEnabledSelectVal = $formValues.querySelector('select.setVllmEnabled')?.value;
  if(valueVllmEnabledSelectVal != null)
    valueVllmEnabledSelectVal = valueVllmEnabledSelectVal === 'true';
  if(valueVllmEnabledSelectVal != null && valueVllmEnabledSelectVal !== '')
    valueVllmEnabled = valueVllmEnabledSelectVal == 'true';
  var setVllmEnabled = removeVllmEnabled ? null : valueVllmEnabled;
  var addVllmEnabled = $formValues.querySelector('.addVllmEnabled')?.checked;
  if(removeVllmEnabled || setVllmEnabled != null && setVllmEnabled !== '')
    vals['setVllmEnabled'] = setVllmEnabled;
  if(addVllmEnabled != null && addVllmEnabled !== '')
    vals['addVllmEnabled'] = addVllmEnabled;
  var removeVllmEnabled = $formValues.querySelector('.removeVllmEnabled')?.checked;
  if(removeVllmEnabled != null && removeVllmEnabled !== '')
    vals['removeVllmEnabled'] = removeVllmEnabled;

  var valuePodRestartCount = $formValues.querySelector('.valuePodRestartCount')?.value;
  var removePodRestartCount = $formValues.querySelector('.removePodRestartCount')?.value === 'true';
  var setPodRestartCount = removePodRestartCount ? null : $formValues.querySelector('.setPodRestartCount')?.value;
  var addPodRestartCount = $formValues.querySelector('.addPodRestartCount')?.value;
  if(removePodRestartCount || setPodRestartCount != null && setPodRestartCount !== '')
    vals['setPodRestartCount'] = setPodRestartCount;
  if(addPodRestartCount != null && addPodRestartCount !== '')
    vals['addPodRestartCount'] = addPodRestartCount;
  var removePodRestartCount = $formValues.querySelector('.removePodRestartCount')?.value;
  if(removePodRestartCount != null && removePodRestartCount !== '')
    vals['removePodRestartCount'] = removePodRestartCount;

  var valuePodsRestarting = $formValues.querySelector('.valuePodsRestarting')?.value;
  var removePodsRestarting = $formValues.querySelector('.removePodsRestarting')?.value === 'true';
  var setPodsRestarting = removePodsRestarting ? null : $formValues.querySelector('.setPodsRestarting')?.value;
  var addPodsRestarting = $formValues.querySelector('.addPodsRestarting')?.value;
  if(removePodsRestarting || setPodsRestarting != null && setPodsRestarting !== '')
    vals['setPodsRestarting'] = JSON.parse(setPodsRestarting);
  if(addPodsRestarting != null && addPodsRestarting !== '')
    vals['addPodsRestarting'] = addPodsRestarting;
  var removePodsRestarting = $formValues.querySelector('.removePodsRestarting')?.value;
  if(removePodsRestarting != null && removePodsRestarting !== '')
    vals['removePodsRestarting'] = removePodsRestarting;

  var valuePodTerminatingCount = $formValues.querySelector('.valuePodTerminatingCount')?.value;
  var removePodTerminatingCount = $formValues.querySelector('.removePodTerminatingCount')?.value === 'true';
  var setPodTerminatingCount = removePodTerminatingCount ? null : $formValues.querySelector('.setPodTerminatingCount')?.value;
  var addPodTerminatingCount = $formValues.querySelector('.addPodTerminatingCount')?.value;
  if(removePodTerminatingCount || setPodTerminatingCount != null && setPodTerminatingCount !== '')
    vals['setPodTerminatingCount'] = setPodTerminatingCount;
  if(addPodTerminatingCount != null && addPodTerminatingCount !== '')
    vals['addPodTerminatingCount'] = addPodTerminatingCount;
  var removePodTerminatingCount = $formValues.querySelector('.removePodTerminatingCount')?.value;
  if(removePodTerminatingCount != null && removePodTerminatingCount !== '')
    vals['removePodTerminatingCount'] = removePodTerminatingCount;

  var valuePodsTerminating = $formValues.querySelector('.valuePodsTerminating')?.value;
  var removePodsTerminating = $formValues.querySelector('.removePodsTerminating')?.value === 'true';
  var setPodsTerminating = removePodsTerminating ? null : $formValues.querySelector('.setPodsTerminating')?.value;
  var addPodsTerminating = $formValues.querySelector('.addPodsTerminating')?.value;
  if(removePodsTerminating || setPodsTerminating != null && setPodsTerminating !== '')
    vals['setPodsTerminating'] = JSON.parse(setPodsTerminating);
  if(addPodsTerminating != null && addPodsTerminating !== '')
    vals['addPodsTerminating'] = addPodsTerminating;
  var removePodsTerminating = $formValues.querySelector('.removePodsTerminating')?.value;
  if(removePodsTerminating != null && removePodsTerminating !== '')
    vals['removePodsTerminating'] = removePodsTerminating;

  var valueFullPvcsCount = $formValues.querySelector('.valueFullPvcsCount')?.value;
  var removeFullPvcsCount = $formValues.querySelector('.removeFullPvcsCount')?.value === 'true';
  var setFullPvcsCount = removeFullPvcsCount ? null : $formValues.querySelector('.setFullPvcsCount')?.value;
  var addFullPvcsCount = $formValues.querySelector('.addFullPvcsCount')?.value;
  if(removeFullPvcsCount || setFullPvcsCount != null && setFullPvcsCount !== '')
    vals['setFullPvcsCount'] = setFullPvcsCount;
  if(addFullPvcsCount != null && addFullPvcsCount !== '')
    vals['addFullPvcsCount'] = addFullPvcsCount;
  var removeFullPvcsCount = $formValues.querySelector('.removeFullPvcsCount')?.value;
  if(removeFullPvcsCount != null && removeFullPvcsCount !== '')
    vals['removeFullPvcsCount'] = removeFullPvcsCount;

  var valueFullPvcs = $formValues.querySelector('.valueFullPvcs')?.value;
  var removeFullPvcs = $formValues.querySelector('.removeFullPvcs')?.value === 'true';
  var setFullPvcs = removeFullPvcs ? null : $formValues.querySelector('.setFullPvcs')?.value;
  var addFullPvcs = $formValues.querySelector('.addFullPvcs')?.value;
  if(removeFullPvcs || setFullPvcs != null && setFullPvcs !== '')
    vals['setFullPvcs'] = JSON.parse(setFullPvcs);
  if(addFullPvcs != null && addFullPvcs !== '')
    vals['addFullPvcs'] = addFullPvcs;
  var removeFullPvcs = $formValues.querySelector('.removeFullPvcs')?.value;
  if(removeFullPvcs != null && removeFullPvcs !== '')
    vals['removeFullPvcs'] = removeFullPvcs;

  var valueNamespaceTerminating = $formValues.querySelector('.valueNamespaceTerminating')?.value;
  var removeNamespaceTerminating = $formValues.querySelector('.removeNamespaceTerminating')?.value === 'true';
  if(valueNamespaceTerminating != null)
    valueNamespaceTerminating = valueNamespaceTerminating === 'true';
  var valueNamespaceTerminatingSelectVal = $formValues.querySelector('select.setNamespaceTerminating')?.value;
  if(valueNamespaceTerminatingSelectVal != null)
    valueNamespaceTerminatingSelectVal = valueNamespaceTerminatingSelectVal === 'true';
  if(valueNamespaceTerminatingSelectVal != null && valueNamespaceTerminatingSelectVal !== '')
    valueNamespaceTerminating = valueNamespaceTerminatingSelectVal == 'true';
  var setNamespaceTerminating = removeNamespaceTerminating ? null : valueNamespaceTerminating;
  var addNamespaceTerminating = $formValues.querySelector('.addNamespaceTerminating')?.checked;
  if(removeNamespaceTerminating || setNamespaceTerminating != null && setNamespaceTerminating !== '')
    vals['setNamespaceTerminating'] = setNamespaceTerminating;
  if(addNamespaceTerminating != null && addNamespaceTerminating !== '')
    vals['addNamespaceTerminating'] = addNamespaceTerminating;
  var removeNamespaceTerminating = $formValues.querySelector('.removeNamespaceTerminating')?.checked;
  if(removeNamespaceTerminating != null && removeNamespaceTerminating !== '')
    vals['removeNamespaceTerminating'] = removeNamespaceTerminating;

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

  var valueApiUrl = $formValues.querySelector('.valueApiUrl')?.value;
  var removeApiUrl = $formValues.querySelector('.removeApiUrl')?.value === 'true';
  var setApiUrl = removeApiUrl ? null : $formValues.querySelector('.setApiUrl')?.value;
  var addApiUrl = $formValues.querySelector('.addApiUrl')?.value;
  if(removeApiUrl || setApiUrl != null && setApiUrl !== '')
    vals['setApiUrl'] = setApiUrl;
  if(addApiUrl != null && addApiUrl !== '')
    vals['addApiUrl'] = addApiUrl;
  var removeApiUrl = $formValues.querySelector('.removeApiUrl')?.value;
  if(removeApiUrl != null && removeApiUrl !== '')
    vals['removeApiUrl'] = removeApiUrl;

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

  var valueLocalClusterName = $formValues.querySelector('.valueLocalClusterName')?.value;
  var removeLocalClusterName = $formValues.querySelector('.removeLocalClusterName')?.value === 'true';
  var setLocalClusterName = removeLocalClusterName ? null : $formValues.querySelector('.setLocalClusterName')?.value;
  var addLocalClusterName = $formValues.querySelector('.addLocalClusterName')?.value;
  if(removeLocalClusterName || setLocalClusterName != null && setLocalClusterName !== '')
    vals['setLocalClusterName'] = setLocalClusterName;
  if(addLocalClusterName != null && addLocalClusterName !== '')
    vals['addLocalClusterName'] = addLocalClusterName;
  var removeLocalClusterName = $formValues.querySelector('.removeLocalClusterName')?.value;
  if(removeLocalClusterName != null && removeLocalClusterName !== '')
    vals['removeLocalClusterName'] = removeLocalClusterName;

  var valueHubResource = (Array.from($formValues.querySelectorAll('.valueHubResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueHubResource != null && valueHubResource !== '')
    vals['setHubResource'] = valueHubResource;

  var valueClusterResource = (Array.from($formValues.querySelectorAll('.valueClusterResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueClusterResource != null && valueClusterResource !== '')
    vals['setClusterResource'] = valueClusterResource;

  var valueProjectResource = $formValues.querySelector('.valueProjectResource')?.value;
  var removeProjectResource = $formValues.querySelector('.removeProjectResource')?.value === 'true';
  var setProjectResource = removeProjectResource ? null : $formValues.querySelector('.setProjectResource')?.value;
  var addProjectResource = $formValues.querySelector('.addProjectResource')?.value;
  if(removeProjectResource || setProjectResource != null && setProjectResource !== '')
    vals['setProjectResource'] = setProjectResource;
  if(addProjectResource != null && addProjectResource !== '')
    vals['addProjectResource'] = addProjectResource;
  var removeProjectResource = $formValues.querySelector('.removeProjectResource')?.value;
  if(removeProjectResource != null && removeProjectResource !== '')
    vals['removeProjectResource'] = removeProjectResource;

  var valueStatusPageTemplateUri = $formValues.querySelector('.valueStatusPageTemplateUri')?.value;
  var removeStatusPageTemplateUri = $formValues.querySelector('.removeStatusPageTemplateUri')?.value === 'true';
  var setStatusPageTemplateUri = removeStatusPageTemplateUri ? null : $formValues.querySelector('.setStatusPageTemplateUri')?.value;
  var addStatusPageTemplateUri = $formValues.querySelector('.addStatusPageTemplateUri')?.value;
  if(removeStatusPageTemplateUri || setStatusPageTemplateUri != null && setStatusPageTemplateUri !== '')
    vals['setStatusPageTemplateUri'] = setStatusPageTemplateUri;
  if(addStatusPageTemplateUri != null && addStatusPageTemplateUri !== '')
    vals['addStatusPageTemplateUri'] = addStatusPageTemplateUri;
  var removeStatusPageTemplateUri = $formValues.querySelector('.removeStatusPageTemplateUri')?.value;
  if(removeStatusPageTemplateUri != null && removeStatusPageTemplateUri !== '')
    vals['removeStatusPageTemplateUri'] = removeStatusPageTemplateUri;

  patchProjectVals(projectResource == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'projectResource:' + projectResource}], vals, target, success, error);
}

function patchProjectFilters($formFilters) {
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

    var filterTenantResource = $formFilters.querySelector('.valueTenantResource')?.value;
    if(filterTenantResource != null && filterTenantResource !== '')
      filters.push({ name: 'fq', value: 'tenantResource:' + filterTenantResource });

    var filterHubId = $formFilters.querySelector('.valueHubId')?.value;
    if(filterHubId != null && filterHubId !== '')
      filters.push({ name: 'fq', value: 'hubId:' + filterHubId });

    var filterClusterName = $formFilters.querySelector('.valueClusterName')?.value;
    if(filterClusterName != null && filterClusterName !== '')
      filters.push({ name: 'fq', value: 'clusterName:' + filterClusterName });

    var filterProjectName = $formFilters.querySelector('.valueProjectName')?.value;
    if(filterProjectName != null && filterProjectName !== '')
      filters.push({ name: 'fq', value: 'projectName:' + filterProjectName });

    var filterProjectDisplayName = $formFilters.querySelector('.valueProjectDisplayName')?.value;
    if(filterProjectDisplayName != null && filterProjectDisplayName !== '')
      filters.push({ name: 'fq', value: 'projectDisplayName:' + filterProjectDisplayName });

    var filterProjectTitle = $formFilters.querySelector('.valueProjectTitle')?.value;
    if(filterProjectTitle != null && filterProjectTitle !== '')
      filters.push({ name: 'fq', value: 'projectTitle:' + filterProjectTitle });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterProjectFieldOfScience = $formFilters.querySelector('.valueProjectFieldOfScience')?.value;
    if(filterProjectFieldOfScience != null && filterProjectFieldOfScience !== '')
      filters.push({ name: 'fq', value: 'projectFieldOfScience:' + filterProjectFieldOfScience });

    var $filterProjectActiveCheckbox = $formFilters.querySelector('input.valueProjectActive[type = "checkbox"]');
    var $filterProjectActiveSelect = $formFilters.querySelector('select.valueProjectActive');
    var filterProjectActive = $filterProjectActiveSelect.length ? $filterProjectActiveSelect.value : $filterProjectActiveCheckbox.checked;
    var filterProjectActiveSelectVal = $formFilters.querySelector('select.filterProjectActive')?.value;
    var filterProjectActive = null;
    if(filterProjectActiveSelectVal !== '')
      filterProjectActive = filterProjectActiveSelectVal == 'true';
    if(filterProjectActive != null && filterProjectActive === true)
      filters.push({ name: 'fq', value: 'projectActive:' + filterProjectActive });

    var $filterGpuEnabledCheckbox = $formFilters.querySelector('input.valueGpuEnabled[type = "checkbox"]');
    var $filterGpuEnabledSelect = $formFilters.querySelector('select.valueGpuEnabled');
    var filterGpuEnabled = $filterGpuEnabledSelect.length ? $filterGpuEnabledSelect.value : $filterGpuEnabledCheckbox.checked;
    var filterGpuEnabledSelectVal = $formFilters.querySelector('select.filterGpuEnabled')?.value;
    var filterGpuEnabled = null;
    if(filterGpuEnabledSelectVal !== '')
      filterGpuEnabled = filterGpuEnabledSelectVal == 'true';
    if(filterGpuEnabled != null && filterGpuEnabled === true)
      filters.push({ name: 'fq', value: 'gpuEnabled:' + filterGpuEnabled });

    var $filterVllmEnabledCheckbox = $formFilters.querySelector('input.valueVllmEnabled[type = "checkbox"]');
    var $filterVllmEnabledSelect = $formFilters.querySelector('select.valueVllmEnabled');
    var filterVllmEnabled = $filterVllmEnabledSelect.length ? $filterVllmEnabledSelect.value : $filterVllmEnabledCheckbox.checked;
    var filterVllmEnabledSelectVal = $formFilters.querySelector('select.filterVllmEnabled')?.value;
    var filterVllmEnabled = null;
    if(filterVllmEnabledSelectVal !== '')
      filterVllmEnabled = filterVllmEnabledSelectVal == 'true';
    if(filterVllmEnabled != null && filterVllmEnabled === true)
      filters.push({ name: 'fq', value: 'vllmEnabled:' + filterVllmEnabled });

    var filterPodRestartCount = $formFilters.querySelector('.valuePodRestartCount')?.value;
    if(filterPodRestartCount != null && filterPodRestartCount !== '')
      filters.push({ name: 'fq', value: 'podRestartCount:' + filterPodRestartCount });

    var filterPodsRestarting = $formFilters.querySelector('.valuePodsRestarting')?.value;
    if(filterPodsRestarting != null && filterPodsRestarting !== '')
      filters.push({ name: 'fq', value: 'podsRestarting:' + filterPodsRestarting });

    var filterPodTerminatingCount = $formFilters.querySelector('.valuePodTerminatingCount')?.value;
    if(filterPodTerminatingCount != null && filterPodTerminatingCount !== '')
      filters.push({ name: 'fq', value: 'podTerminatingCount:' + filterPodTerminatingCount });

    var filterPodsTerminating = $formFilters.querySelector('.valuePodsTerminating')?.value;
    if(filterPodsTerminating != null && filterPodsTerminating !== '')
      filters.push({ name: 'fq', value: 'podsTerminating:' + filterPodsTerminating });

    var filterFullPvcsCount = $formFilters.querySelector('.valueFullPvcsCount')?.value;
    if(filterFullPvcsCount != null && filterFullPvcsCount !== '')
      filters.push({ name: 'fq', value: 'fullPvcsCount:' + filterFullPvcsCount });

    var filterFullPvcs = $formFilters.querySelector('.valueFullPvcs')?.value;
    if(filterFullPvcs != null && filterFullPvcs !== '')
      filters.push({ name: 'fq', value: 'fullPvcs:' + filterFullPvcs });

    var $filterNamespaceTerminatingCheckbox = $formFilters.querySelector('input.valueNamespaceTerminating[type = "checkbox"]');
    var $filterNamespaceTerminatingSelect = $formFilters.querySelector('select.valueNamespaceTerminating');
    var filterNamespaceTerminating = $filterNamespaceTerminatingSelect.length ? $filterNamespaceTerminatingSelect.value : $filterNamespaceTerminatingCheckbox.checked;
    var filterNamespaceTerminatingSelectVal = $formFilters.querySelector('select.filterNamespaceTerminating')?.value;
    var filterNamespaceTerminating = null;
    if(filterNamespaceTerminatingSelectVal !== '')
      filterNamespaceTerminating = filterNamespaceTerminatingSelectVal == 'true';
    if(filterNamespaceTerminating != null && filterNamespaceTerminating === true)
      filters.push({ name: 'fq', value: 'namespaceTerminating:' + filterNamespaceTerminating });

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

    var filterApiUrl = $formFilters.querySelector('.valueApiUrl')?.value;
    if(filterApiUrl != null && filterApiUrl !== '')
      filters.push({ name: 'fq', value: 'apiUrl:' + filterApiUrl });

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

    var filterLocalClusterName = $formFilters.querySelector('.valueLocalClusterName')?.value;
    if(filterLocalClusterName != null && filterLocalClusterName !== '')
      filters.push({ name: 'fq', value: 'localClusterName:' + filterLocalClusterName });

    var filterHubResource = $formFilters.querySelector('.valueHubResource')?.value;
    if(filterHubResource != null && filterHubResource !== '')
      filters.push({ name: 'fq', value: 'hubResource:' + filterHubResource });

    var filterClusterResource = $formFilters.querySelector('.valueClusterResource')?.value;
    if(filterClusterResource != null && filterClusterResource !== '')
      filters.push({ name: 'fq', value: 'clusterResource:' + filterClusterResource });

    var filterProjectResource = $formFilters.querySelector('.valueProjectResource')?.value;
    if(filterProjectResource != null && filterProjectResource !== '')
      filters.push({ name: 'fq', value: 'projectResource:' + filterProjectResource });

    var filterStatusPageTemplateUri = $formFilters.querySelector('.valueStatusPageTemplateUri')?.value;
    if(filterStatusPageTemplateUri != null && filterStatusPageTemplateUri !== '')
      filters.push({ name: 'fq', value: 'statusPageTemplateUri:' + filterStatusPageTemplateUri });
  }
  return filters;
}

function patchProjectVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchProjectVals(filters, vals, target, success, error);
}

function patchProjectVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/project?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postProject($formValues, target, success, error) {
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
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
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

  var valueTenantResource = (Array.from($formValues.querySelectorAll('.valueTenantResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueTenantResource != null && valueTenantResource !== '')
    vals['tenantResource'] = valueTenantResource;

  var valueHubId = $formValues.querySelector('.valueHubId')?.value;
  if(valueHubId != null && valueHubId !== '')
    vals['hubId'] = valueHubId;

  var valueClusterName = $formValues.querySelector('.valueClusterName')?.value;
  if(valueClusterName != null && valueClusterName !== '')
    vals['clusterName'] = valueClusterName;

  var valueProjectName = $formValues.querySelector('.valueProjectName')?.value;
  if(valueProjectName != null && valueProjectName !== '')
    vals['projectName'] = valueProjectName;

  var valueProjectDisplayName = $formValues.querySelector('.valueProjectDisplayName')?.value;
  if(valueProjectDisplayName != null && valueProjectDisplayName !== '')
    vals['projectDisplayName'] = valueProjectDisplayName;

  var valueProjectTitle = $formValues.querySelector('.valueProjectTitle')?.value;
  if(valueProjectTitle != null && valueProjectTitle !== '')
    vals['projectTitle'] = valueProjectTitle;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueProjectFieldOfScience = $formValues.querySelector('.valueProjectFieldOfScience')?.value;
  if(valueProjectFieldOfScience != null && valueProjectFieldOfScience !== '')
    vals['projectFieldOfScience'] = valueProjectFieldOfScience;

  var valueProjectActive = $formValues.querySelector('.valueProjectActive')?.value;
  if(valueProjectActive != null && valueProjectActive !== '')
    vals['projectActive'] = valueProjectActive == 'true';

  var valueGpuEnabled = $formValues.querySelector('.valueGpuEnabled')?.value;
  if(valueGpuEnabled != null && valueGpuEnabled !== '')
    vals['gpuEnabled'] = valueGpuEnabled == 'true';

  var valueVllmEnabled = $formValues.querySelector('.valueVllmEnabled')?.value;
  if(valueVllmEnabled != null && valueVllmEnabled !== '')
    vals['vllmEnabled'] = valueVllmEnabled == 'true';

  var valuePodRestartCount = $formValues.querySelector('.valuePodRestartCount')?.value;
  if(valuePodRestartCount != null && valuePodRestartCount !== '')
    vals['podRestartCount'] = valuePodRestartCount;

  var valuePodsRestarting = $formValues.querySelector('.valuePodsRestarting')?.value;
  if(valuePodsRestarting != null && valuePodsRestarting !== '')
    vals['podsRestarting'] = valuePodsRestarting;

  var valuePodTerminatingCount = $formValues.querySelector('.valuePodTerminatingCount')?.value;
  if(valuePodTerminatingCount != null && valuePodTerminatingCount !== '')
    vals['podTerminatingCount'] = valuePodTerminatingCount;

  var valuePodsTerminating = $formValues.querySelector('.valuePodsTerminating')?.value;
  if(valuePodsTerminating != null && valuePodsTerminating !== '')
    vals['podsTerminating'] = valuePodsTerminating;

  var valueFullPvcsCount = $formValues.querySelector('.valueFullPvcsCount')?.value;
  if(valueFullPvcsCount != null && valueFullPvcsCount !== '')
    vals['fullPvcsCount'] = valueFullPvcsCount;

  var valueFullPvcs = $formValues.querySelector('.valueFullPvcs')?.value;
  if(valueFullPvcs != null && valueFullPvcs !== '')
    vals['fullPvcs'] = valueFullPvcs;

  var valueNamespaceTerminating = $formValues.querySelector('.valueNamespaceTerminating')?.value;
  if(valueNamespaceTerminating != null && valueNamespaceTerminating !== '')
    vals['namespaceTerminating'] = valueNamespaceTerminating == 'true';

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  var valueApiUrl = $formValues.querySelector('.valueApiUrl')?.value;
  if(valueApiUrl != null && valueApiUrl !== '')
    vals['apiUrl'] = valueApiUrl;

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

  var valueLocalClusterName = $formValues.querySelector('.valueLocalClusterName')?.value;
  if(valueLocalClusterName != null && valueLocalClusterName !== '')
    vals['localClusterName'] = valueLocalClusterName;

  var valueHubResource = (Array.from($formValues.querySelectorAll('.valueHubResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueHubResource != null && valueHubResource !== '')
    vals['hubResource'] = valueHubResource;

  var valueClusterResource = (Array.from($formValues.querySelectorAll('.valueClusterResource')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueClusterResource != null && valueClusterResource !== '')
    vals['clusterResource'] = valueClusterResource;

  var valueProjectResource = $formValues.querySelector('.valueProjectResource')?.value;
  if(valueProjectResource != null && valueProjectResource !== '')
    vals['projectResource'] = valueProjectResource;

  var valueStatusPageTemplateUri = $formValues.querySelector('.valueStatusPageTemplateUri')?.value;
  if(valueStatusPageTemplateUri != null && valueStatusPageTemplateUri !== '')
    vals['statusPageTemplateUri'] = valueStatusPageTemplateUri;

  fetch(
    '/en-us/api/project'
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

function postProjectVals(vals, target, success, error) {
  fetch(
    '/en-us/api/project'
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

async function deleteProject(target, projectResource, success, error) {
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
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/project/' + encodeURIComponent(projectResource)
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

async function putimportProject($formValues, target, projectResource, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportProjectVals(JSON.parse(json), target, success, error);
}

function putimportProjectVals(json, target, success, error) {
  fetch(
    '/en-us/api/project-import'
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

async function deletefilterProject($formFilterstarget, success, error) {
  var filters = deletefilterProjectFilters($formFilters);

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
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/project?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function deletefilterProjectFilters($formFilters) {
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

    var filterTenantResource = $formFilters.querySelector('.valueTenantResource')?.value;
    if(filterTenantResource != null && filterTenantResource !== '')
      filters.push({ name: 'fq', value: 'tenantResource:' + filterTenantResource });

    var filterHubId = $formFilters.querySelector('.valueHubId')?.value;
    if(filterHubId != null && filterHubId !== '')
      filters.push({ name: 'fq', value: 'hubId:' + filterHubId });

    var filterClusterName = $formFilters.querySelector('.valueClusterName')?.value;
    if(filterClusterName != null && filterClusterName !== '')
      filters.push({ name: 'fq', value: 'clusterName:' + filterClusterName });

    var filterProjectName = $formFilters.querySelector('.valueProjectName')?.value;
    if(filterProjectName != null && filterProjectName !== '')
      filters.push({ name: 'fq', value: 'projectName:' + filterProjectName });

    var filterProjectDisplayName = $formFilters.querySelector('.valueProjectDisplayName')?.value;
    if(filterProjectDisplayName != null && filterProjectDisplayName !== '')
      filters.push({ name: 'fq', value: 'projectDisplayName:' + filterProjectDisplayName });

    var filterProjectTitle = $formFilters.querySelector('.valueProjectTitle')?.value;
    if(filterProjectTitle != null && filterProjectTitle !== '')
      filters.push({ name: 'fq', value: 'projectTitle:' + filterProjectTitle });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterProjectFieldOfScience = $formFilters.querySelector('.valueProjectFieldOfScience')?.value;
    if(filterProjectFieldOfScience != null && filterProjectFieldOfScience !== '')
      filters.push({ name: 'fq', value: 'projectFieldOfScience:' + filterProjectFieldOfScience });

    var $filterProjectActiveCheckbox = $formFilters.querySelector('input.valueProjectActive[type = "checkbox"]');
    var $filterProjectActiveSelect = $formFilters.querySelector('select.valueProjectActive');
    var filterProjectActive = $filterProjectActiveSelect.length ? $filterProjectActiveSelect.value : $filterProjectActiveCheckbox.checked;
    var filterProjectActiveSelectVal = $formFilters.querySelector('select.filterProjectActive')?.value;
    var filterProjectActive = null;
    if(filterProjectActiveSelectVal !== '')
      filterProjectActive = filterProjectActiveSelectVal == 'true';
    if(filterProjectActive != null && filterProjectActive === true)
      filters.push({ name: 'fq', value: 'projectActive:' + filterProjectActive });

    var $filterGpuEnabledCheckbox = $formFilters.querySelector('input.valueGpuEnabled[type = "checkbox"]');
    var $filterGpuEnabledSelect = $formFilters.querySelector('select.valueGpuEnabled');
    var filterGpuEnabled = $filterGpuEnabledSelect.length ? $filterGpuEnabledSelect.value : $filterGpuEnabledCheckbox.checked;
    var filterGpuEnabledSelectVal = $formFilters.querySelector('select.filterGpuEnabled')?.value;
    var filterGpuEnabled = null;
    if(filterGpuEnabledSelectVal !== '')
      filterGpuEnabled = filterGpuEnabledSelectVal == 'true';
    if(filterGpuEnabled != null && filterGpuEnabled === true)
      filters.push({ name: 'fq', value: 'gpuEnabled:' + filterGpuEnabled });

    var $filterVllmEnabledCheckbox = $formFilters.querySelector('input.valueVllmEnabled[type = "checkbox"]');
    var $filterVllmEnabledSelect = $formFilters.querySelector('select.valueVllmEnabled');
    var filterVllmEnabled = $filterVllmEnabledSelect.length ? $filterVllmEnabledSelect.value : $filterVllmEnabledCheckbox.checked;
    var filterVllmEnabledSelectVal = $formFilters.querySelector('select.filterVllmEnabled')?.value;
    var filterVllmEnabled = null;
    if(filterVllmEnabledSelectVal !== '')
      filterVllmEnabled = filterVllmEnabledSelectVal == 'true';
    if(filterVllmEnabled != null && filterVllmEnabled === true)
      filters.push({ name: 'fq', value: 'vllmEnabled:' + filterVllmEnabled });

    var filterPodRestartCount = $formFilters.querySelector('.valuePodRestartCount')?.value;
    if(filterPodRestartCount != null && filterPodRestartCount !== '')
      filters.push({ name: 'fq', value: 'podRestartCount:' + filterPodRestartCount });

    var filterPodsRestarting = $formFilters.querySelector('.valuePodsRestarting')?.value;
    if(filterPodsRestarting != null && filterPodsRestarting !== '')
      filters.push({ name: 'fq', value: 'podsRestarting:' + filterPodsRestarting });

    var filterPodTerminatingCount = $formFilters.querySelector('.valuePodTerminatingCount')?.value;
    if(filterPodTerminatingCount != null && filterPodTerminatingCount !== '')
      filters.push({ name: 'fq', value: 'podTerminatingCount:' + filterPodTerminatingCount });

    var filterPodsTerminating = $formFilters.querySelector('.valuePodsTerminating')?.value;
    if(filterPodsTerminating != null && filterPodsTerminating !== '')
      filters.push({ name: 'fq', value: 'podsTerminating:' + filterPodsTerminating });

    var filterFullPvcsCount = $formFilters.querySelector('.valueFullPvcsCount')?.value;
    if(filterFullPvcsCount != null && filterFullPvcsCount !== '')
      filters.push({ name: 'fq', value: 'fullPvcsCount:' + filterFullPvcsCount });

    var filterFullPvcs = $formFilters.querySelector('.valueFullPvcs')?.value;
    if(filterFullPvcs != null && filterFullPvcs !== '')
      filters.push({ name: 'fq', value: 'fullPvcs:' + filterFullPvcs });

    var $filterNamespaceTerminatingCheckbox = $formFilters.querySelector('input.valueNamespaceTerminating[type = "checkbox"]');
    var $filterNamespaceTerminatingSelect = $formFilters.querySelector('select.valueNamespaceTerminating');
    var filterNamespaceTerminating = $filterNamespaceTerminatingSelect.length ? $filterNamespaceTerminatingSelect.value : $filterNamespaceTerminatingCheckbox.checked;
    var filterNamespaceTerminatingSelectVal = $formFilters.querySelector('select.filterNamespaceTerminating')?.value;
    var filterNamespaceTerminating = null;
    if(filterNamespaceTerminatingSelectVal !== '')
      filterNamespaceTerminating = filterNamespaceTerminatingSelectVal == 'true';
    if(filterNamespaceTerminating != null && filterNamespaceTerminating === true)
      filters.push({ name: 'fq', value: 'namespaceTerminating:' + filterNamespaceTerminating });

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

    var filterApiUrl = $formFilters.querySelector('.valueApiUrl')?.value;
    if(filterApiUrl != null && filterApiUrl !== '')
      filters.push({ name: 'fq', value: 'apiUrl:' + filterApiUrl });

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

    var filterLocalClusterName = $formFilters.querySelector('.valueLocalClusterName')?.value;
    if(filterLocalClusterName != null && filterLocalClusterName !== '')
      filters.push({ name: 'fq', value: 'localClusterName:' + filterLocalClusterName });

    var filterHubResource = $formFilters.querySelector('.valueHubResource')?.value;
    if(filterHubResource != null && filterHubResource !== '')
      filters.push({ name: 'fq', value: 'hubResource:' + filterHubResource });

    var filterClusterResource = $formFilters.querySelector('.valueClusterResource')?.value;
    if(filterClusterResource != null && filterClusterResource !== '')
      filters.push({ name: 'fq', value: 'clusterResource:' + filterClusterResource });

    var filterProjectResource = $formFilters.querySelector('.valueProjectResource')?.value;
    if(filterProjectResource != null && filterProjectResource !== '')
      filters.push({ name: 'fq', value: 'projectResource:' + filterProjectResource });

    var filterStatusPageTemplateUri = $formFilters.querySelector('.valueStatusPageTemplateUri')?.value;
    if(filterStatusPageTemplateUri != null && filterStatusPageTemplateUri !== '')
      filters.push({ name: 'fq', value: 'statusPageTemplateUri:' + filterStatusPageTemplateUri });
  }
  return filters;
}

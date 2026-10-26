Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Cluster_Page_created')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Cluster_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Cluster_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Cluster_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH statusStorage
          document.querySelector('#Cluster_Page_statusStorage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_statusStorage');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setStatusStorage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_statusStorage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_statusStorage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_statusStorage');
            const valid = form.reportValidity();
          });

          // PATCH hubId
          document.querySelector('#Cluster_Page_hubId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hubId');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setHubId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_hubId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_hubId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hubId');
            const valid = form.reportValidity();
          });

          // PATCH clusterName
          document.querySelector('#Cluster_Page_clusterName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setClusterName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_clusterName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_clusterName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_clusterName');
            const valid = form.reportValidity();
          });

          // PATCH hubCluster
          document.querySelector('#Cluster_Page_hubCluster')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_hubCluster');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setHubCluster', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_hubCluster')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_hubCluster')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_hubCluster');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#Cluster_Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_description')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH location
          document.querySelector('#Cluster_Page_location')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setLocation', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_location')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_location')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.reportValidity();
          });

          // PATCH aiNodesTotal
          document.querySelector('#Cluster_Page_aiNodesTotal')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_aiNodesTotal');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setAiNodesTotal', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_aiNodesTotal')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_aiNodesTotal')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_aiNodesTotal');
            const valid = form.reportValidity();
          });

          // PATCH gpuDevicesTotal
          document.querySelector('#Cluster_Page_gpuDevicesTotal')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_gpuDevicesTotal');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setGpuDevicesTotal', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_gpuDevicesTotal')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_gpuDevicesTotal')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_gpuDevicesTotal');
            const valid = form.reportValidity();
          });

          // PATCH vmsTotal
          document.querySelector('#Cluster_Page_vmsTotal')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_vmsTotal');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setVmsTotal', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_vmsTotal')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_vmsTotal')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_vmsTotal');
            const valid = form.reportValidity();
          });

          // PATCH cpuCoresTotal
          document.querySelector('#Cluster_Page_cpuCoresTotal')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_cpuCoresTotal');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setCpuCoresTotal', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_cpuCoresTotal')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_cpuCoresTotal')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_cpuCoresTotal');
            const valid = form.reportValidity();
          });

          // PATCH memoryBytesTotal
          document.querySelector('#Cluster_Page_memoryBytesTotal')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_memoryBytesTotal');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setMemoryBytesTotal', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_memoryBytesTotal')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_memoryBytesTotal')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_memoryBytesTotal');
            const valid = form.reportValidity();
          });

          // PATCH cephUsedBytes
          document.querySelector('#Cluster_Page_cephUsedBytes')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_cephUsedBytes');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setCephUsedBytes', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_cephUsedBytes')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_cephUsedBytes')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_cephUsedBytes');
            const valid = form.reportValidity();
          });

          // PATCH cephCapacityBytes
          document.querySelector('#Cluster_Page_cephCapacityBytes')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_cephCapacityBytes');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setCephCapacityBytes', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_cephCapacityBytes')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_cephCapacityBytes')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_cephCapacityBytes');
            const valid = form.reportValidity();
          });

          // PATCH id
          document.querySelector('#Cluster_Page_id')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_id')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_id')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.reportValidity();
          });

          // PATCH ngsildTenant
          document.querySelector('#Cluster_Page_ngsildTenant')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setNgsildTenant', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_ngsildTenant')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_ngsildTenant')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.reportValidity();
          });

          // PATCH ngsildPath
          document.querySelector('#Cluster_Page_ngsildPath')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setNgsildPath', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_ngsildPath')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_ngsildPath')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.reportValidity();
          });

          // PATCH ngsildContext
          document.querySelector('#Cluster_Page_ngsildContext')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setNgsildContext', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_ngsildContext')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_ngsildContext')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.reportValidity();
          });

          // PATCH ngsildData
          document.querySelector('#Cluster_Page_ngsildData')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setNgsildData', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_ngsildData')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_ngsildData')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Cluster_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Cluster_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#Cluster_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH apiUrl
          document.querySelector('#Cluster_Page_apiUrl')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_apiUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setApiUrl', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_apiUrl')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_apiUrl')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_apiUrl');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Cluster_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#Cluster_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#Cluster_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#Cluster_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH clusterResource
          document.querySelector('#Cluster_Page_clusterResource')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_clusterResource');
            const valid = form.checkValidity();
            if(valid) {
              patchClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'clusterResource:' + event.currentTarget.getAttribute('data-clusterResource') }]
                  , 'setClusterResource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Cluster_Page_clusterResource')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Cluster_Page_clusterResource')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_clusterResource');
            const valid = form.reportValidity();
          });
});

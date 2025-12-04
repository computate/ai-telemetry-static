Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Page_created')?.addEventListener('change', (event) => {
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
                patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH leaseInfo
          document.querySelector('#Page_leaseInfo')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_leaseInfo');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setLeaseInfo', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_leaseInfo')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_leaseInfo')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_leaseInfo');
            const valid = form.reportValidity();
          });

          // PATCH networkInfo
          document.querySelector('#Page_networkInfo')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_networkInfo');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNetworkInfo', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_networkInfo')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_networkInfo')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_networkInfo');
            const valid = form.reportValidity();
          });

          // PATCH nodeId
          document.querySelector('#Page_nodeId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_nodeId');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNodeId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_nodeId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_nodeId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_nodeId');
            const valid = form.reportValidity();
          });

          // PATCH nodeIsMaintenance
          document.querySelector('#Page_nodeIsMaintenance')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_nodeIsMaintenance');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNodeIsMaintenance', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_nodeIsMaintenance')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_nodeIsMaintenance')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_nodeIsMaintenance');
            const valid = form.reportValidity();
          });

          // PATCH nodeLinks
          document.querySelector('#Page_nodeLinks')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_nodeLinks');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNodeLinks', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_nodeLinks')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_nodeLinks')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_nodeLinks');
            const valid = form.reportValidity();
          });

          // PATCH nodeName
          document.querySelector('#Page_nodeName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_nodeName');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNodeName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_nodeName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_nodeName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_nodeName');
            const valid = form.reportValidity();
          });

          // PATCH nodePowerState
          document.querySelector('#Page_nodePowerState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_nodePowerState');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNodePowerState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_nodePowerState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_nodePowerState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_nodePowerState');
            const valid = form.reportValidity();
          });

          // PATCH nodeProvisionState
          document.querySelector('#Page_nodeProvisionState')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_nodeProvisionState');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNodeProvisionState', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_nodeProvisionState')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_nodeProvisionState')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_nodeProvisionState');
            const valid = form.reportValidity();
          });

          // PATCH nodeResourceClass
          document.querySelector('#Page_nodeResourceClass')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_nodeResourceClass');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setNodeResourceClass', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_nodeResourceClass')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_nodeResourceClass')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_nodeResourceClass');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNodeVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'nodeId:' + event.currentTarget.getAttribute('data-nodeId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });
});

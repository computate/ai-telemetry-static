Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#BareMetalNetwork_Page_created')?.addEventListener('change', (event) => {
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
                patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#BareMetalNetwork_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#BareMetalNetwork_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#BareMetalNetwork_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH id
          document.querySelector('#BareMetalNetwork_Page_id')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_id')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_id')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#BareMetalNetwork_Page_name')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_name')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_name')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#BareMetalNetwork_Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_description')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH availabilityZoneHints
          document.querySelector('#BareMetalNetwork_Page_availabilityZoneHints')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_availabilityZoneHints');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setAvailabilityZoneHints', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_availabilityZoneHints')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_availabilityZoneHints')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_availabilityZoneHints');
            const valid = form.reportValidity();
          });

          // PATCH availabilityZones
          document.querySelector('#BareMetalNetwork_Page_availabilityZones')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_availabilityZones');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setAvailabilityZones', event.currentTarget.value == '' ? null : event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_availabilityZones')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_availabilityZones')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_availabilityZones');
            const valid = form.reportValidity();
          });

          // PATCH createdAt
          document.querySelector('#BareMetalNetwork_Page_createdAt')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_createdAt');
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
                patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                    , 'setCreatedAt', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#BareMetalNetwork_Page_createdAt')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_createdAt')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_createdAt');
            const valid = form.reportValidity();
          });

          // PATCH dnsDomain
          document.querySelector('#BareMetalNetwork_Page_dnsDomain')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_dnsDomain');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setDnsDomain', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_dnsDomain')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_dnsDomain')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_dnsDomain');
            const valid = form.reportValidity();
          });

          // PATCH mtu
          document.querySelector('#BareMetalNetwork_Page_mtu')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_mtu');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setMtu', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_mtu')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_mtu')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_mtu');
            const valid = form.reportValidity();
          });

          // PATCH projectId
          document.querySelector('#BareMetalNetwork_Page_projectId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_projectId');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setProjectId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_projectId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_projectId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_projectId');
            const valid = form.reportValidity();
          });

          // PATCH providerNetworkType
          document.querySelector('#BareMetalNetwork_Page_providerNetworkType')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_providerNetworkType');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setProviderNetworkType', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_providerNetworkType')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_providerNetworkType')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_providerNetworkType');
            const valid = form.reportValidity();
          });

          // PATCH providerPhysicalNetwork
          document.querySelector('#BareMetalNetwork_Page_providerPhysicalNetwork')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_providerPhysicalNetwork');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setProviderPhysicalNetwork', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_providerPhysicalNetwork')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_providerPhysicalNetwork')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_providerPhysicalNetwork');
            const valid = form.reportValidity();
          });

          // PATCH providerSegmentationId
          document.querySelector('#BareMetalNetwork_Page_providerSegmentationId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_providerSegmentationId');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setProviderSegmentationId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_providerSegmentationId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_providerSegmentationId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_providerSegmentationId');
            const valid = form.reportValidity();
          });

          // PATCH qosPolicyId
          document.querySelector('#BareMetalNetwork_Page_qosPolicyId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_qosPolicyId');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setQosPolicyId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_qosPolicyId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_qosPolicyId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_qosPolicyId');
            const valid = form.reportValidity();
          });

          // PATCH revisionNumber
          document.querySelector('#BareMetalNetwork_Page_revisionNumber')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_revisionNumber');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setRevisionNumber', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_revisionNumber')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_revisionNumber')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_revisionNumber');
            const valid = form.reportValidity();
          });

          // PATCH status
          document.querySelector('#BareMetalNetwork_Page_status')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_status');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setStatus', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_status')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_status')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_status');
            const valid = form.reportValidity();
          });

          // PATCH subnetIds
          document.querySelector('#BareMetalNetwork_Page_subnetIds')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_subnetIds');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setSubnetIds', event.currentTarget.value == '' ? null : event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_subnetIds')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_subnetIds')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_subnetIds');
            const valid = form.reportValidity();
          });

          // PATCH tags
          document.querySelector('#BareMetalNetwork_Page_tags')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tags');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setTags', event.currentTarget.value == '' ? null : event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_tags')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_tags')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tags');
            const valid = form.reportValidity();
          });

          // PATCH tenantId
          document.querySelector('#BareMetalNetwork_Page_tenantId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setTenantId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_tenantId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_tenantId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_tenantId');
            const valid = form.reportValidity();
          });

          // PATCH updatedAt
          document.querySelector('#BareMetalNetwork_Page_updatedAt')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_updatedAt');
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
                patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                    , 'setUpdatedAt', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#BareMetalNetwork_Page_updatedAt')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_updatedAt')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_updatedAt');
            const valid = form.reportValidity();
          });

          // PATCH isAdminStateUp
          document.querySelector('#BareMetalNetwork_Page_isAdminStateUp')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_isAdminStateUp');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setIsAdminStateUp', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_isAdminStateUp')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_isAdminStateUp')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_isAdminStateUp');
            const valid = form.reportValidity();
          });

          // PATCH isDefault
          document.querySelector('#BareMetalNetwork_Page_isDefault')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_isDefault');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setIsDefault', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_isDefault')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_isDefault')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_isDefault');
            const valid = form.reportValidity();
          });

          // PATCH isPortSecurityEnabled
          document.querySelector('#BareMetalNetwork_Page_isPortSecurityEnabled')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_isPortSecurityEnabled');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setIsPortSecurityEnabled', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_isPortSecurityEnabled')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_isPortSecurityEnabled')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_isPortSecurityEnabled');
            const valid = form.reportValidity();
          });

          // PATCH isRouterExternal
          document.querySelector('#BareMetalNetwork_Page_isRouterExternal')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_isRouterExternal');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setIsRouterExternal', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_isRouterExternal')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_isRouterExternal')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_isRouterExternal');
            const valid = form.reportValidity();
          });

          // PATCH isShared
          document.querySelector('#BareMetalNetwork_Page_isShared')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_isShared');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setIsShared', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_isShared')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_isShared')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_isShared');
            const valid = form.reportValidity();
          });

          // PATCH isVlanQueing
          document.querySelector('#BareMetalNetwork_Page_isVlanQueing')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_isVlanQueing');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setIsVlanQueing', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_isVlanQueing')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_isVlanQueing')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_isVlanQueing');
            const valid = form.reportValidity();
          });

          // PATCH isVlanTransparent
          document.querySelector('#BareMetalNetwork_Page_isVlanTransparent')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_isVlanTransparent');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setIsVlanTransparent', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_isVlanTransparent')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_isVlanTransparent')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_isVlanTransparent');
            const valid = form.reportValidity();
          });

          // PATCH l2Adjacency
          document.querySelector('#BareMetalNetwork_Page_l2Adjacency')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_l2Adjacency');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setL2Adjacency', event.currentTarget.checked
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_l2Adjacency')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_l2Adjacency')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_l2Adjacency');
            const valid = form.reportValidity();
          });

          // PATCH locationCloud
          document.querySelector('#BareMetalNetwork_Page_locationCloud')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_locationCloud');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setLocationCloud', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_locationCloud')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_locationCloud')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_locationCloud');
            const valid = form.reportValidity();
          });

          // PATCH locationProjectDomainId
          document.querySelector('#BareMetalNetwork_Page_locationProjectDomainId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_locationProjectDomainId');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setLocationProjectDomainId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_locationProjectDomainId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_locationProjectDomainId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_locationProjectDomainId');
            const valid = form.reportValidity();
          });

          // PATCH locationProjectDomainName
          document.querySelector('#BareMetalNetwork_Page_locationProjectDomainName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_locationProjectDomainName');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setLocationProjectDomainName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_locationProjectDomainName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_locationProjectDomainName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_locationProjectDomainName');
            const valid = form.reportValidity();
          });

          // PATCH locationProjectId
          document.querySelector('#BareMetalNetwork_Page_locationProjectId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_locationProjectId');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setLocationProjectId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_locationProjectId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_locationProjectId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_locationProjectId');
            const valid = form.reportValidity();
          });

          // PATCH locationProjectName
          document.querySelector('#BareMetalNetwork_Page_locationProjectName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_locationProjectName');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setLocationProjectName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_locationProjectName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_locationProjectName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_locationProjectName');
            const valid = form.reportValidity();
          });

          // PATCH locationRegionName
          document.querySelector('#BareMetalNetwork_Page_locationRegionName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_locationRegionName');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setLocationRegionName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_locationRegionName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_locationRegionName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_locationRegionName');
            const valid = form.reportValidity();
          });

          // PATCH locationZone
          document.querySelector('#BareMetalNetwork_Page_locationZone')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_locationZone');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setLocationZone', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_locationZone')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_locationZone')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_locationZone');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#BareMetalNetwork_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#BareMetalNetwork_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#BareMetalNetwork_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH apiUrl
          document.querySelector('#BareMetalNetwork_Page_apiUrl')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_apiUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setApiUrl', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_apiUrl')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_apiUrl')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_apiUrl');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#BareMetalNetwork_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#BareMetalNetwork_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#BareMetalNetwork_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#BareMetalNetwork_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchBareMetalNetworkVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#BareMetalNetwork_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#BareMetalNetwork_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });
});

Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          document.querySelector('#htmButton_patchAiCluster')?.addEventListener('click', (event) => {
            document.querySelector('#patchAiClusterDialog').show();
          });

          document.querySelector('#htmButton_postAiCluster')?.addEventListener('click', (event) => {
            document.querySelector('#postAiClusterDialog').show();
          });

          document.querySelector('#htmButton_putimportAiCluster')?.addEventListener('click', (event) => {
            document.querySelector('#putimportAiClusterDialog').show();
          });

          document.querySelector('#htmButton_searchpageAiCluster')?.addEventListener('click', (event) => {
            document.querySelector('#searchpageAiClusterDialog').show();
          });

          // PATCH created
          document.querySelector('#fqAiCluster_created')?.addEventListener('sl-change', (event) => {
            fqChange('AiCluster', event.target);
          });
          document.querySelector('#buttonFacetAiCluster_created')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.target);
          });
          document.querySelector('#pageFacetPivotAiCluster_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('AiCluster', event.target);
          });
          document.querySelector('#Page_created')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.value.split('[').pop().split(']')[0];
              var t1 = moment(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a');
              var t2 = moment.tz(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a', timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchAiClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#fqAiCluster_archived')?.addEventListener('sl-change', (event) => {
            fqChange('AiCluster', event.target);
          });
          document.querySelector('#buttonFacetAiCluster_archived')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.target);
          });
          document.querySelector('#pageFacetPivotAiCluster_archived')?.addEventListener('sl-change', (event) => {
            facetPivotChange('AiCluster', event.target);
          });
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchAiClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#fqAiCluster_name')?.addEventListener('sl-change', (event) => {
            fqChange('AiCluster', event.target);
          });
          document.querySelector('#buttonFacetAiCluster_name')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.target);
          });
          document.querySelector('#pageFacetPivotAiCluster_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('AiCluster', event.target);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchAiClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_name')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#fqAiCluster_description')?.addEventListener('sl-change', (event) => {
            fqChange('AiCluster', event.target);
          });
          document.querySelector('#buttonFacetAiCluster_description')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.target);
          });
          document.querySelector('#pageFacetPivotAiCluster_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('AiCluster', event.target);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchAiClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH entityId
          document.querySelector('#fqAiCluster_entityId')?.addEventListener('sl-change', (event) => {
            fqChange('AiCluster', event.target);
          });
          document.querySelector('#buttonFacetAiCluster_entityId')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.target);
          });
          document.querySelector('#pageFacetPivotAiCluster_entityId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('AiCluster', event.target);
          });
          document.querySelector('#Page_entityId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_entityId');
            const valid = form.checkValidity();
            if(valid) {
              patchAiClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setEntityId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_entityId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_entityId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_entityId');
            const valid = form.reportValidity();
          });

          // PATCH location
          document.querySelector('#fqAiCluster_location')?.addEventListener('sl-change', (event) => {
            fqChange('AiCluster', event.target);
          });
          document.querySelector('#buttonFacetAiCluster_location')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.target);
          });
          document.querySelector('#pageFacetPivotAiCluster_location')?.addEventListener('sl-change', (event) => {
            facetPivotChange('AiCluster', event.target);
          });
          document.querySelector('#Page_location')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.checkValidity();
            if(valid) {
              patchAiClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setLocation', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_location')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_location')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.reportValidity();
          });

          // PATCH gpuNodesTotal
          document.querySelector('#fqAiCluster_gpuNodesTotal')?.addEventListener('sl-change', (event) => {
            fqChange('AiCluster', event.target);
          });
          document.querySelector('#buttonFacetAiCluster_gpuNodesTotal')?.addEventListener('click', (event) => {
            facetFieldChange('AiCluster', event.target);
          });
          document.querySelector('#pageFacetPivotAiCluster_gpuNodesTotal')?.addEventListener('sl-change', (event) => {
            facetPivotChange('AiCluster', event.target);
          });
          document.querySelector('#Page_gpuNodesTotal')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_gpuNodesTotal');
            const valid = form.checkValidity();
            if(valid) {
              patchAiClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setGpuNodesTotal', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_gpuNodesTotal')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_gpuNodesTotal')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_gpuNodesTotal');
            const valid = form.reportValidity();
          });

          // PATCH inheritPk
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.checkValidity();
            if(valid) {
              patchAiClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setInheritPk', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchAiClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchAiClusterVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });
});

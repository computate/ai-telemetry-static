Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          document.querySelector('#htmButton_patchGpu')?.addEventListener('click', (event) => {
            document.querySelector('#patchGpuDialog').show();
          });

          document.querySelector('#htmButton_postGpu')?.addEventListener('click', (event) => {
            document.querySelector('#postGpuDialog').show();
          });

          document.querySelector('#htmButton_putimportGpu')?.addEventListener('click', (event) => {
            document.querySelector('#putimportGpuDialog').show();
          });

          document.querySelector('#htmButton_searchpageGpu')?.addEventListener('click', (event) => {
            document.querySelector('#searchpageGpuDialog').show();
          });

          // PATCH created
          document.querySelector('#fqGpu_created')?.addEventListener('sl-change', (event) => {
            fqChange('Gpu', event.target);
          });
          document.querySelector('#buttonFacetGpu_created')?.addEventListener('click', (event) => {
            facetFieldChange('Gpu', event.target);
          });
          document.querySelector('#pageFacetPivotGpu_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Gpu', event.target);
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
                patchGpuVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
          document.querySelector('#fqGpu_archived')?.addEventListener('sl-change', (event) => {
            fqChange('Gpu', event.target);
          });
          document.querySelector('#buttonFacetGpu_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Gpu', event.target);
          });
          document.querySelector('#pageFacetPivotGpu_archived')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Gpu', event.target);
          });
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchGpuVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
          document.querySelector('#fqGpu_name')?.addEventListener('sl-change', (event) => {
            fqChange('Gpu', event.target);
          });
          document.querySelector('#buttonFacetGpu_name')?.addEventListener('click', (event) => {
            facetFieldChange('Gpu', event.target);
          });
          document.querySelector('#pageFacetPivotGpu_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Gpu', event.target);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
          document.querySelector('#fqGpu_description')?.addEventListener('sl-change', (event) => {
            fqChange('Gpu', event.target);
          });
          document.querySelector('#buttonFacetGpu_description')?.addEventListener('click', (event) => {
            facetFieldChange('Gpu', event.target);
          });
          document.querySelector('#pageFacetPivotGpu_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Gpu', event.target);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
          document.querySelector('#fqGpu_entityId')?.addEventListener('sl-change', (event) => {
            fqChange('Gpu', event.target);
          });
          document.querySelector('#buttonFacetGpu_entityId')?.addEventListener('click', (event) => {
            facetFieldChange('Gpu', event.target);
          });
          document.querySelector('#pageFacetPivotGpu_entityId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Gpu', event.target);
          });
          document.querySelector('#Page_entityId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_entityId');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
          document.querySelector('#fqGpu_location')?.addEventListener('sl-change', (event) => {
            fqChange('Gpu', event.target);
          });
          document.querySelector('#buttonFacetGpu_location')?.addEventListener('click', (event) => {
            facetFieldChange('Gpu', event.target);
          });
          document.querySelector('#pageFacetPivotGpu_location')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Gpu', event.target);
          });
          document.querySelector('#Page_location')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH inheritPk
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.checkValidity();
            if(valid) {
              patchGpuVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
              patchGpuVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
              patchGpuVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

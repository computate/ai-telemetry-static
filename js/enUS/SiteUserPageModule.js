Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          document.querySelector('#htmButton_patchSiteUser')?.addEventListener('click', (event) => {
            document.querySelector('#patchSiteUserDialog').show();
          });

          document.querySelector('#htmButton_postSiteUser')?.addEventListener('click', (event) => {
            document.querySelector('#postSiteUserDialog').show();
          });

          document.querySelector('#htmButton_putimportSiteUser')?.addEventListener('click', (event) => {
            document.querySelector('#putimportSiteUserDialog').show();
          });

          document.querySelector('#htmButton_searchpageSiteUser')?.addEventListener('click', (event) => {
            document.querySelector('#searchpageSiteUserDialog').show();
          });

          // PATCH created
          document.querySelector('#fqSiteUser_created')?.addEventListener('sl-change', (event) => {
            fqChange('SiteUser', event.target);
          });
          document.querySelector('#buttonFacetSiteUser_created')?.addEventListener('click', (event) => {
            facetFieldChange('SiteUser', event.target);
          });
          document.querySelector('#pageFacetPivotSiteUser_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SiteUser', event.target);
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
                patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
          document.querySelector('#fqSiteUser_archived')?.addEventListener('sl-change', (event) => {
            fqChange('SiteUser', event.target);
          });
          document.querySelector('#buttonFacetSiteUser_archived')?.addEventListener('click', (event) => {
            facetFieldChange('SiteUser', event.target);
          });
          document.querySelector('#pageFacetPivotSiteUser_archived')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SiteUser', event.target);
          });
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH seeArchived
          document.querySelector('#Page_seeArchived')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_seeArchived');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setSeeArchived', event.currentTarget.checked
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_seeArchived')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_seeArchived')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_seeArchived');
            const valid = form.reportValidity();
          });

          // PATCH seeDeleted
          document.querySelector('#Page_seeDeleted')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_seeDeleted');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setSeeDeleted', event.currentTarget.checked
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_seeDeleted')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_seeDeleted')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_seeDeleted');
            const valid = form.reportValidity();
          });

          // PATCH inheritPk
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
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

          // PATCH userId
          document.querySelector('#Page_userId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userId');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUserId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userId');
            const valid = form.reportValidity();
          });

          // PATCH userName
          document.querySelector('#Page_userName')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUserName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userName')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userName')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userName');
            const valid = form.reportValidity();
          });

          // PATCH userEmail
          document.querySelector('#Page_userEmail')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userEmail');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUserEmail', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userEmail')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userEmail')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userEmail');
            const valid = form.reportValidity();
          });

          // PATCH userFirstName
          document.querySelector('#Page_userFirstName')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userFirstName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUserFirstName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userFirstName')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userFirstName')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userFirstName');
            const valid = form.reportValidity();
          });

          // PATCH userLastName
          document.querySelector('#Page_userLastName')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userLastName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUserLastName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userLastName')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userLastName')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userLastName');
            const valid = form.reportValidity();
          });

          // PATCH userFullName
          document.querySelector('#Page_userFullName')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userFullName');
            const valid = form.checkValidity();
            if(valid) {
              patchSiteUserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'pk:' + event.currentTarget.getAttribute('data-pk') }]
                  , 'setUserFullName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userFullName')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userFullName')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userFullName');
            const valid = form.reportValidity();
          });
});

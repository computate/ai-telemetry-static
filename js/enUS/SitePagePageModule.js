Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          document.querySelector('#htmButton_patchSitePage')?.addEventListener('click', (event) => {
            document.querySelector('#patchSitePageDialog').show();
          });

          document.querySelector('#htmButton_postSitePage')?.addEventListener('click', (event) => {
            document.querySelector('#postSitePageDialog').show();
          });

          document.querySelector('#htmButton_putimportSitePage')?.addEventListener('click', (event) => {
            document.querySelector('#putimportSitePageDialog').show();
          });

          document.querySelector('#htmButton_searchpageSitePage')?.addEventListener('click', (event) => {
            document.querySelector('#searchpageSitePageDialog').show();
          });

          // PATCH created
          document.querySelector('#fqSitePage_created')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.target);
          });
          document.querySelector('#buttonFacetSitePage_created')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.target);
          });
          document.querySelector('#pageFacetPivotSitePage_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.target);
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
                patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

          // PATCH objectId
          document.querySelector('#Page_objectId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_objectId');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setObjectId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_objectId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_objectId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_objectId');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

          // PATCH pageId
          document.querySelector('#fqSitePage_pageId')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.target);
          });
          document.querySelector('#buttonFacetSitePage_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.target);
          });
          document.querySelector('#pageFacetPivotSitePage_pageId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.target);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setPageId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.reportValidity();
          });

          // PATCH uri
          document.querySelector('#fqSitePage_uri')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.target);
          });
          document.querySelector('#buttonFacetSitePage_uri')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.target);
          });
          document.querySelector('#pageFacetPivotSitePage_uri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.target);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.reportValidity();
          });

          // PATCH url
          document.querySelector('#fqSitePage_url')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.target);
          });
          document.querySelector('#buttonFacetSitePage_url')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.target);
          });
          document.querySelector('#pageFacetPivotSitePage_url')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.target);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setUrl', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_url')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.reportValidity();
          });

          // PATCH author
          document.querySelector('#fqSitePage_author')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.target);
          });
          document.querySelector('#buttonFacetSitePage_author')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.target);
          });
          document.querySelector('#pageFacetPivotSitePage_author')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.target);
          });
          document.querySelector('#Page_author')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_author');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setAuthor', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_author')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_author')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_author');
            const valid = form.reportValidity();
          });

          // PATCH pageImageUri
          document.querySelector('#fqSitePage_pageImageUri')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.target);
          });
          document.querySelector('#buttonFacetSitePage_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.target);
          });
          document.querySelector('#pageFacetPivotSitePage_pageImageUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.target);
          });
          document.querySelector('#Page_pageImageUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_pageImageUri');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setPageImageUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_pageImageUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_pageImageUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_pageImageUri');
            const valid = form.reportValidity();
          });

          // PATCH inheritPk
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

          // PATCH id
          document.querySelector('#Page_id')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_id')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_id')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.reportValidity();
          });

          // PATCH courseNum
          document.querySelector('#fqSitePage_courseNum')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.target);
          });
          document.querySelector('#buttonFacetSitePage_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.target);
          });
          document.querySelector('#pageFacetPivotSitePage_courseNum')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.target);
          });
          document.querySelector('#Page_courseNum')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_courseNum');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setCourseNum', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_courseNum')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_courseNum')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_courseNum');
            const valid = form.reportValidity();
          });

          // PATCH lessonNum
          document.querySelector('#fqSitePage_lessonNum')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.target);
          });
          document.querySelector('#buttonFacetSitePage_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.target);
          });
          document.querySelector('#pageFacetPivotSitePage_lessonNum')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.target);
          });
          document.querySelector('#Page_lessonNum')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_lessonNum');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setLessonNum', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_lessonNum')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_lessonNum')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_lessonNum');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setTitle', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_title')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_title')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.reportValidity();
          });

          // PATCH resourceUri
          document.querySelector('#fqSitePage_resourceUri')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.target);
          });
          document.querySelector('#buttonFacetSitePage_resourceUri')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.target);
          });
          document.querySelector('#pageFacetPivotSitePage_resourceUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.target);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setResourceUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.reportValidity();
          });

          // PATCH templateUri
          document.querySelector('#fqSitePage_templateUri')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.target);
          });
          document.querySelector('#buttonFacetSitePage_templateUri')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.target);
          });
          document.querySelector('#pageFacetPivotSitePage_templateUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.target);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setTemplateUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.reportValidity();
          });

          // PATCH h1
          document.querySelector('#Page_h1')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_h1');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setH1', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_h1')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_h1')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_h1');
            const valid = form.reportValidity();
          });

          // PATCH h2
          document.querySelector('#Page_h2')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_h2');
            const valid = form.checkValidity();
            if(valid) {
              patchSitePageVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setH2', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_h2')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_h2')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_h2');
            const valid = form.reportValidity();
          });
});

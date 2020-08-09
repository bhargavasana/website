(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{294:function(e,t,o){"use strict";o.r(t);var i=o(6),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"validation-documentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validation-documentation"}},[e._v("#")]),e._v(" Validation Documentation")]),e._v(" "),o("p",[e._v("Model validation results should be well documented in order to provide users of the travel forecasts the information they need to establish their confidence in the models.  The model documentation should cover the limitations of the models as well as the capabilities of the models.  If the model limitations and portions of the model that have not been validated are documented, users of the forecasts can reasonably assess the level of confidence they place in the forecasts.  Understanding that a model cannot be used to test a specific issue or policy can, ultimately, lead to increased trust in the travel model when used for analyses for which it has been validated.")]),e._v(" "),o("p",[e._v("Model validation documentation has often been included as a chapter in model estimation and calibration documentation or interspersed in the various chapters of the model development documentation.  This practice can minimize the importance of model validation, make the validation information difficult to find, or confuse the concepts of model estimation, calibration, and validation.  For these reasons, the development of a standalone model validation document is recommended.")]),e._v(" "),o("h3",{attrs:{id:"executive-summary-for-nonmodeler-users-of-forecasts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#executive-summary-for-nonmodeler-users-of-forecasts"}},[e._v("#")]),e._v(" Executive Summary for Nonmodeler Users of Forecasts")]),e._v(" "),o("p",[e._v("An executive summary should contain sufficient information for the readers to become acquainted with the full report without reading it.  The summary should contain:")]),e._v(" "),o("ul",[o("li",[e._v("A statement of the purpose and need for the validation;")]),e._v(" "),o("li",[e._v("An overview of the validation process, information on the validation data;")]),e._v(" "),o("li",[e._v("A summary of the validation results;")]),e._v(" "),o("li",[e._v("A summary of model strengths and weaknesses; and")]),e._v(" "),o("li",[e._v("Information regarding the types of studies for which the model is valid and for which it should not be used.")])]),e._v(" "),o("p",[e._v("The summary of validation results might be presented via a table of the validation tests performed for the various model components along with qualitative assessments of the results.  The executive summary should avoid focusing mainly on traffic and transit assignment results and statistics.")]),e._v(" "),o("p",[e._v("Other executive summary information may include:")]),e._v(" "),o("ul",[o("li",[e._v("Model area background information with maps of the region and major transportation facilities;")]),e._v(" "),o("li",[e._v('Modeling "philosophy" overview describing the purpose and process of the travel model;')]),e._v(" "),o("li",[e._v("Modeling process overview detailing the travel demand forecasting process and steps in terms that nonmodeler users can understand;")]),e._v(" "),o("li",[e._v("Model development section summarizing the development, calibration, and validation of the model;")]),e._v(" "),o("li",[e._v("Recent model enhancements and improvements; and")]),e._v(" "),o("li",[e._v("Overview of the report and an explanation of how the validation summaries are reported.")])]),e._v(" "),o("p",[e._v("The overall objective for the executive summary is to summarize the report findings so that both experienced model users and nonmodelers understand the usefulness and the limitations of the model.")]),e._v(" "),o("h3",{attrs:{id:"component-validation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-validation"}},[e._v("#")]),e._v(" Component Validation")]),e._v(" "),o("p",[e._v("Earlier chapters of this manual describe the model components typically present in traditional trip-based and emerging activity and tour-based travel models.  Model validation documentation should include sections for each of the model components even if validation tests were not performed for a component.  Information that a model component has not been validated is crucial to assessing the overall model validity.")]),e._v(" "),o("p",[e._v("Validation documentation should also discuss the variables included in the model and how those variables influence the results.  For example, mode choice documentation might note that auto operating costs are included in the model and that those costs represent items such as fuel costs, fuel efficiency, other out of pocket costs.  This discussion might take place even if an explicit validation of model sensitivity to the variable has not been performed.")]),e._v(" "),o("p",[e._v("Throughout this manual, an effort has been made to clearly define model estimation, model calibration, and model validation.  Continuing with this distinction suggests that model component validation should focus only on the validation tests performed and validation results obtained.  Model adjustments and corrections necessary to obtain the validation results desired should be covered in model estimation and calibration documentation.  Documenting model adjustments and corrections (a model calibration task) in the validation documentation introduces the risk that a future model user will not apply the proper model; documenting the information in both locations is acceptable, but introduces the difficulty of maintaining documentation consistency.")]),e._v(" "),o("h3",{attrs:{id:"model-system-validation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#model-system-validation"}},[e._v("#")]),e._v(" Model System Validation")]),e._v(" "),o("p",[e._v('The documentation of the travel demand forecast model components should be followed by a section summarizing the overall model system validation.  The end results of the travel demand modeling process are generally considered to be highway assignments and transit ridership.  In the past, "proof" that a model is valid has generally been provided by satisfying specific statistical standards such as obtaining an R2 of 0.89.  However, satisfying such a standard is neither necessary nor sufficient to prove that a model is valid.')]),e._v(" "),o("p",[e._v('The above should not be interpreted as dismissing the importance of reporting statistical matches of observed traffic volumes and transit ridership.  These statistics may be quite useful in assessing how travel forecasts should be interpreted for project design.  Care should be use to ensure that validation statistics are not overstated.  For example, a systemwide R2 of 0.95 suggests that 95 percent of the variation in traffic on facilities is "explained" by the travel model.  However, a major contributor to such a statistic is the fact that higher-level facilities with more capacity receive more traffic than lower-level facilities.  More informative statistics might be the R2 values for facilities stratified by area type and facility type or by capacity or observed volume ranges.')]),e._v(" "),o("h3",{attrs:{id:"model-sensitivities"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#model-sensitivities"}},[e._v("#")]),e._v(" Model Sensitivities")]),e._v(" "),o("p",[e._v("Sensitivity testing should be presented in a manner that allows the user to understand the impacts of changes in model inputs on forecast results.  Sensitivity testing might present true validation results if it results from backcasting or forecasting using a model calibrated using data from a different year.  Alternatively, the sensitivity testing might simply provide information on how the travel forecasts are impacted by changes in model inputs.")]),e._v(" "),o("p",[e._v('For New Starts forecasts, the FTA uses the concept that the travel forecasts should "tell a coherent story."  For New Starts, this concept relates to the model structure and parameters and how well they describe how people behave in relation to their transportation options.  This concept can be easily extended to the documentation of sensitivity testing results.')]),e._v(" "),o("h3",{attrs:{id:"documenting-the-limits-of-the-model-validity"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#documenting-the-limits-of-the-model-validity"}},[e._v("#")]),e._v(" Documenting the Limits of the Model Validity")]),e._v(" "),o("p",[e._v("The model validation report should include a section reporting on the limits of the model validity.  Travel demand models are often applied to provide forecasts for issues outside the scope or purview of the model.  Documenting model limitations and providing guidance on model applications can be a valuable resource for end users.")]),e._v(" "),o("p",[e._v("The validation documentation should also include a section on the high and low variable values used in the model development.  Such an approach would help future model users to avoid the use of model parameters that lie outside the range of the validated data used to develop the model.")]),e._v(" "),o("h3",{attrs:{id:"documenting-next-steps-in-model-development-calibration-validation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#documenting-next-steps-in-model-development-calibration-validation"}},[e._v("#")]),e._v(" Documenting Next Steps in Model Development/Calibration/Validation")]),e._v(" "),o("p",[e._v("The model validation report is a primary document used to communicate information regarding the travel demand forecasting model.  For all intents and purposes it is an infomercial for the model set; it details the model set, provides guidance on its use, and can be valuable for planning and prioritizing the next steps required for model development.  This section can include:")]),e._v(" "),o("ul",[o("li",[e._v("Future work plan elements or suggestions regarding which model components should be updated next;")]),e._v(" "),o("li",[e._v("Future data collection efforts and surveys;")]),e._v(" "),o("li",[e._v("Estimated schedule for model development and model validation; and")]),e._v(" "),o("li",[e._v("Any areas of emerging research of the model development that might impact the users and stakeholders.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);
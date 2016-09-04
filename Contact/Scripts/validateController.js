$('#contactForm').bootstrapValidator({
    /*   feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      }, */
      fields: {
          name: {
              validators: {
                      stringLength: {
                      min: 2,
                  },
                      notEmpty: {
                      message: 'Please supply your first name'
                  }
              }
          },
          email: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your email address'
                  },
                  emailAddress: {
                      message: 'Please supply a valid email address'
                  }
              }
          },
          subject: {
            validators: {
                  stringLength: {
                    min: 3,
                    max: 30,
                    message:'Please summarize'
                },
                notEmpty: {
                    message: 'Please supply a description of your request'
                }
                }
            },
          message: {
              validators: {
                    stringLength: {
                      min: 3,
                      max: 200,
                      message:'Please enter at least 10 characters and no more than 200'
                  },
                  notEmpty: {
                      message: 'Please supply a description of your project'
                  }
                  }
              }
      },

      submitHandler: function(validator, form, submitButton) {
        event.preventDefault();
        $('#userMessage').addClass('success').val('Thank you, your message has been delivered!');
        $('input').val('');
        return false;
      }
    });

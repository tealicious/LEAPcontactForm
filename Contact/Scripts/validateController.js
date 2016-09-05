$('#contactForm').bootstrapValidator({
       feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
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
        var name = validator.getFieldElements('name').val();
        //personalize our confirmation of delivery message
        $('#userMessage').addClass('success').css('border-color','#cccccc').val('Thank you ' + name + ', your message has been delivered!');
        //clear our form to reinforce success of delivery
        //$('textarea');
        $('input').val('').css('border-color','#cccccc'); //hide our inputs
        $('.has-success .glyphicon').css('opacity','0');//hide our checkmoarks
        //form.submit();
        return false;
      }
    });

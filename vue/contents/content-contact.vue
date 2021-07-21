<template>
  <div>
    <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
    <div class="my-5">
      <form id="contactForm" :disabled="submitted" v-show="submitted === false" @submit="onSubmit">
        <div class="form-floating">
          <input @focusout="validateName" class="form-control" :class="{'is-invalid': nameInvalid}" v-model="name"
                 id="name" type="text" placeholder="Enter your name..." required/>
          <label for="name">Name</label>
          <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
        </div>
        <div class="form-floating">
          <input @focusout="validateEmail" class="form-control" id="email" type="email"
                 :class="{'is-invalid': emailInvalid}" v-model="email" placeholder="Enter your email..." required/>
          <label for="email">Email address</label>
          <div class="invalid-feedback" v-if="this.email === ''">An email is required.</div>
          <div class="invalid-feedback" v-else>Email is not valid.</div>
        </div>
        <div class="form-floating">
          <input @focusout="validatePhone" :class="{'is-invalid': phoneInvalid}" v-model="phone" v-numbers
                 class="form-control" id="phone" type="tel" placeholder="Enter your phone number..."/>
          <label for="phone">Phone Number</label>
          <div class="invalid-feedback">Please enter a valid phone number.</div>
        </div>
        <div class="form-floating">
          <textarea @focusout="validateMessage" :class="{'is-invalid': messageInvalid}" v-model="message"
                    class="form-control" id="message" placeholder="Enter your message here..." style="height: 12rem"
                    required></textarea>
          <label for="message">Message</label>
          <div class="invalid-feedback">A message is required.</div>
        </div>
        <br />
        <!-- Submit Button-->
        <button class="btn btn-primary text-uppercase"
                :class="{'disabled': disableSubmitButton}"
                id="submitButton" type="submit">Send</button>
      </form>
      <div v-if="submitted">
        <div class="text-center mb-3">
          <div class="fw-bolder">Form submission successful!</div>
          <p>Thank you <i>{{name | capitalize}}</i>, for reaching me out ! I will reply as soon as possible :)</p>
          Sincerely,<br>
          Rijal Tanjung
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "content-contact",
  methods: {
    validateName() {
      this.nameInvalid = this.name.length < 3;
    },
    validateEmail() {
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      this.emailInvalid =  re.test(String(this.email).toLowerCase()) === false;
    },
    validatePhone() {
      this.phoneInvalid = this.phone.length ? this.phone.length < 8 : false;
    },
    validateMessage() {
      this.messageInvalid = this.message.length < 3;
    },
    onSubmit(e) {
      e.preventDefault();
      this.submitted = true;
    }
  },
  computed: {
    disableSubmitButton() {
      return [this.submitted, this.nameInvalid, this.emailInvalid,
            this.phoneInvalid, this.messageInvalid].includes(true) ||
          (this.name === '' && this.email === '' && this.message === '');
    }
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      nameInvalid: false,
      emailInvalid: false,
      phoneInvalid: false,
      messageInvalid: false,
      submitted: false
    }
  },
  directives: {
    numbers(el) {
      el.addEventListener('keyup', () => {
        let regex = /^[0-9]*$/
        if (!regex.test(el.value)) {
          el.value = el.value.slice(0, -1)
        }
      })
    }
  },
  filters: {
    capitalize(string) {
      const words = string.split(' ');
      let name = [];
      words.forEach(word => {
        word = word.trim();
        word = word[0].toUpperCase() + word.substring(1);
        name.push(word);
      })
      return name.join(' ');
    }
  }
}
</script>

<style scoped>

</style>
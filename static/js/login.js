document.addEventListener('DOMContentLoaded', () => {
  const cassetteScene = document.querySelector('.cassette-scene');
  const userField = document.getElementById('username-input');
  const passField = document.getElementById('password-input');
  const errorMsg = document.getElementById('login-error-msg');
  const flipBackBtn = document.getElementById('flip-back-btn');
  const submitBtn = document.getElementById('login-submit-btn');
  const loginForm = document.getElementById('login-form');

  const validUsers = ['cristian.vegag', 'mcantuarias', 'just_seb03'];
  let currentStep = 'username';

  const showError = (message) => {
    if (!errorMsg) return;
    errorMsg.textContent = message;
    errorMsg.classList.add('show');
  };

  const clearError = () => {
    if (!errorMsg) return;
    errorMsg.textContent = '';
    errorMsg.classList.remove('show');
  };

  const goToPasswordStep = () => {
    const rawVal = userField ? userField.value : '';
    const cleanUser = rawVal.trim().toLowerCase();

    if (!cleanUser) {
      showError('Por favor ingresa un usuario');
      userField?.focus();
      return;
    }

    if (!validUsers.includes(cleanUser)) {
      showError('El usuario no existe');
      userField?.focus();
      return;
    }

    clearError();
    currentStep = 'password';
    cassetteScene?.classList.add('flipped');

    setTimeout(() => {
      passField?.focus();
    }, 400);
  };

  const goToUsernameStep = () => {
    clearError();
    currentStep = 'username';
    cassetteScene?.classList.remove('flipped');

    setTimeout(() => {
      userField?.focus();
    }, 400);
  };

  const submitLogin = async () => {
    clearError();
    const rawUser = userField ? userField.value.trim() : '';
    const rawPass = passField ? passField.value : '';

    if (!rawPass) {
      showError('Por favor ingresa tu contraseña');
      passField?.focus();
      return;
    }

    // CSRF token from cookie or hidden input
    let csrfToken = '';
    const csrfInput = document.querySelector('[name=csrfmiddlewaretoken]');
    if (csrfInput) {
      csrfToken = csrfInput.value;
    } else {
      const match = document.cookie.match(/csrftoken=([^;]+)/);
      if (match) csrfToken = match[1];
    }

    try {
      const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({
          usuario: rawUser,
          password: rawPass,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        window.location.href = data.redirect_url;
      } else {
        showError(data.error || 'Contraseña incorrecta');
        passField?.select();
      }
    } catch (err) {
      // Fallback: standard form submit if fetch fails
      console.warn('AJAX submit failed, falling back to form submit:', err);
      if (loginForm) loginForm.submit();
    }
  };

  // Keyboard handlers
  if (userField) {
    userField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        goToPasswordStep();
      }
    });

    userField.addEventListener('input', () => {
      clearError();
    });

    // Initial focus
    userField.focus();
  }

  if (passField) {
    passField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submitLogin();
      } else if (e.key === 'Backspace' && !passField.value) {
        // Optional quick return to Side A on empty backspace
        // goToUsernameStep();
      }
    });

    passField.addEventListener('input', () => {
      clearError();
    });
  }

  if (flipBackBtn) {
    flipBackBtn.addEventListener('click', (e) => {
      e.preventDefault();
      goToUsernameStep();
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentStep === 'username') {
        goToPasswordStep();
      } else {
        submitLogin();
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (currentStep === 'username') {
        goToPasswordStep();
      } else {
        submitLogin();
      }
    });
  }
});

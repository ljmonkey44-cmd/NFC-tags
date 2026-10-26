// Mobilní menu
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
  const setMenu = (open) => {
    menu.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', String(open));
  };
  btn.addEventListener('click', () => setMenu(menu.classList.contains('hidden')));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
}

// Poptávkový formulář přes Web3Forms
const form = document.getElementById('poptavka');
if (form) {
  const status = document.getElementById('form-status');
  const submit = form.querySelector('button[type="submit"]');
  const showStatus = (text, ok) => {
    status.textContent = text;
    status.classList.remove('hidden', 'text-brand-emerald', 'text-red-400');
    status.classList.add(ok ? 'text-brand-emerald' : 'text-red-400');
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submit.disabled = true;
    submit.textContent = 'Odesílám…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      form.reset();
      showStatus('Děkuji, poptávka dorazila. Ozvu se vám do 24 hodin.', true);
    } catch (err) {
      showStatus('Zprávu se nepodařilo odeslat. Zavolejte mi prosím na +420 607 320 185 nebo napište na lukas.juza5@seznam.cz.', false);
    } finally {
      submit.disabled = false;
      submit.textContent = 'Odeslat poptávku';
    }
  });
}

(() => {
  'use strict';
  if (document.body.dataset.page !== 'contact') return;

  const sync = () => {
    const picker = document.querySelector('#picker-category');
    if (!picker || typeof categories === 'undefined' || !Array.isArray(categories)) return false;

    const current = picker.value;
    picker.innerHTML = '<option value="">All categories</option>' +
      categories.map(c => `<option value="${String(c.slug).replace(/"/g,'&quot;')}">${c.name}</option>`).join('');
    if ([...picker.options].some(o => o.value === current)) picker.value = current;

    const tradeSelect = document.querySelector('#trade-form select[name="category"]');
    if (tradeSelect) {
      const selected = tradeSelect.value;
      tradeSelect.innerHTML = '<option value="">Choose a range</option>' +
        categories.map(c => `<option value="${String(c.name).replace(/"/g,'&quot;')}">${c.name}</option>`).join('') +
        '<option>Multiple categories</option>';
      if ([...tradeSelect.options].some(o => o.value === selected)) tradeSelect.value = selected;
    }

    /* Existing picker owns the render function through onchange; trigger it
       after all extra catalogue scripts have appended their products. */
    picker.dispatchEvent(new Event('change', { bubbles:true }));
    return true;
  };

  if (!sync()) {
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (sync() || tries > 40) clearInterval(timer);
    }, 100);
  }
})();
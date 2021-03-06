import moment from 'moment';
import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('moment-subtract',{
  integration: true,
  beforeSetup() {
    moment.locale('en');
  }
});

test('one arg subtracts duration', function(assert) {
  assert.expect(1);
  const duration = { days: 3 };
  this.set('duration', duration);
  const expectedString = moment().subtract(duration).format('ddd MMM DD YYYY');

  this.render(hbs`{{moment-subtract duration}}`);
  assert.ok(this.$().text().match(new RegExp(expectedString)));
});

test('two args with number and string', function(assert) {
  assert.expect(1);
  const number = 3;
  const precision = 'days';
  this.setProperties({
    number,
    precision
  });
  const expectedString = moment().subtract(number, precision).format('ddd MMM DD YYYY');

  this.render(hbs`{{moment-subtract number precision}}`);
  assert.ok(this.$().text().match(new RegExp(expectedString)));
});

test('two args with date and duration', function(assert) {
  assert.expect(1);
  const duration = { days: 3 };
  this.set('duration', duration);
  const expectedString = moment('2016-06-01').subtract(duration).format('ddd MMM DD YYYY');

  this.render(hbs`{{moment-subtract '2016-06-01' duration}}`);
  assert.ok(this.$().text().match(new RegExp(expectedString)));
});

test('one arg with precision', function(assert) {
  assert.expect(1);
  const number = 3;
  this.set('number', number);
  const expectedString = moment().subtract(number, 'days').format('ddd MMM DD YYYY');

  this.render(hbs`{{moment-subtract number precision='days'}}`);
  assert.ok(this.$().text().match(new RegExp(expectedString)));
});

test('two args with precision', function(assert) {
  assert.expect(1);
  const number = 3;
  this.set('number', number);
  const expectedString = moment('2016-06-01').subtract(number, 'days').format('ddd MMM DD YYYY');

  this.render(hbs`{{moment-subtract '2016-06-01' number precision='days'}}`);
  assert.ok(this.$().text().match(new RegExp(expectedString)));
});


module.exports = function (bh) {
    bh.match('search', function (ctx, json) {
        ctx.tag('form', true);
        ctx.attrs(ctx.extend({
            'action': json.action || '/',
            'role': 'search'
        }, ctx.attrs()));
        ctx.content({
            'elem': 'table',
            'content': {
                'elem': 'row',
                'content': json.content
            }
        }, true);
    });
    bh.match('search__table', function (ctx, json) {
        ctx.tag('table', true);
    });
    bh.match('search__row', function (ctx, json) {
        ctx.tag('tr', true);
        ctx.bem(false, true);
    });
    bh.match('search__cell', function (ctx, json) {
        ctx.tag('td', true);
    });
};

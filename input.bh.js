module.exports = function (bh) {
    bh.match('input', function (ctx, json) {
        ctx.tParam('_attrs', json.attrs);
        delete json.attrs;
        ctx.tag('span', true);
        ctx.mix([{ 'block': 'clearfix' }]
           .concat(ctx.mix()));
        ctx.content({
            'elem': 'control',
            'tag': 'input',
            'attrs': ctx.tParam('_attrs')
        }, true);
    });
};

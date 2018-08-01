'use strict';

/**
 * Topdestination.js controller
 *
 * @description: A set of functions called "actions" for managing `Topdestination`.
 */

module.exports = {

  /**
   * Retrieve topdestination records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.topdestination.search(ctx.query);
    } else {
      return strapi.services.topdestination.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a topdestination record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.topdestination.fetch(ctx.params);
  },

  /**
   * Count topdestination records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.topdestination.count(ctx.query);
  },

  /**
   * Create a/an topdestination record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.topdestination.add(ctx.request.body);
  },

  /**
   * Update a/an topdestination record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.topdestination.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an topdestination record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.topdestination.remove(ctx.params);
  }
};

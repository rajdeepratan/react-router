'use strict';

/**
 * City.js controller
 *
 * @description: A set of functions called "actions" for managing `City`.
 */

module.exports = {

  /**
   * Retrieve city records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.city.search(ctx.query);
    } else {
      return strapi.services.city.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a city record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.city.fetch(ctx.params);
  },

  /**
   * Count city records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.city.count(ctx.query);
  },

  /**
   * Create a/an city record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.city.add(ctx.request.body);
  },

  /**
   * Update a/an city record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.city.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an city record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.city.remove(ctx.params);
  }
};

import { Redis } from "@upstash/redis";
import type { NavItemToggleType } from "@/validators/shared/navitemtoggle";

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function getAllNavItems() {
	const keys = await redis.smembers<string[]>(`${process.env.HK_ENV}_config:navitemslist`);
	if (!keys || keys.length < 1) {
		return {
			keys: [],
			items: [],
		};
	}
	const pipe = redis.pipeline();
	for (const key of keys) {
		pipe.hgetall(`${process.env.HK_ENV}_config:navitems:${key}`);
	}
	const items = await pipe.exec<NavItemToggleType[]>();
	return {
		keys,
		items,
	};
}

export function parseRedisBoolean(
	value: string | boolean | undefined | null,
	defaultValue?: boolean,
) {
	if (typeof value === "string") {
		if (value === "true") return true;
		if (value === "false") return false;
	}
	if (typeof value === "boolean") return value;
	return defaultValue !== undefined ? defaultValue : false;
}

export function parseRedisNumber(value: string | null, defaultValue: number) {
	if (value && !isNaN(parseInt(value))) {
		return parseInt(value);
	} else {
		return defaultValue;
	}
}

"use server";

import { z } from "zod";
import { adminAction } from "@/lib/safe-action";
import { Redis } from "@upstash/redis";
import { revalidatePath } from "next/cache";

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const defaultRegistrationToggleSchema = z.object({
	enabled: z.boolean(),
});

const defaultRSVPLimitSchema = z.object({
	rsvpLimit: z.number(),
});

export const toggleRegistrationEnabled = adminAction
	.schema(defaultRegistrationToggleSchema)
	.action(async ({ parsedInput: { enabled }, ctx: { user, userId } }) => {
		await redis.set(`${process.env.HK_ENV}_config:registration:registrationEnabled`, enabled);
		revalidatePath("/admin/toggles/registration");
		return { success: true, statusSet: enabled };
	});

export const toggleRegistrationMessageEnabled = adminAction
	.schema(defaultRegistrationToggleSchema)
	.action(async ({ parsedInput: { enabled }, ctx: { user, userId } }) => {
		await redis.set(
			`${process.env.HK_ENV}_config:registration:registrationMessageEnabled`,
			enabled,
		);
		revalidatePath("/admin/toggles/registration");
		return { success: true, statusSet: enabled };
	});

export const toggleSecretRegistrationEnabled = adminAction
	.schema(defaultRegistrationToggleSchema)
	.action(async ({ parsedInput: { enabled }, ctx: { user, userId } }) => {
		await redis.set(
			`${process.env.HK_ENV}_config:registration:secretRegistrationEnabled`,
			enabled,
		);
		revalidatePath("/admin/toggles/registration");
		return { success: true, statusSet: enabled };
	});

export const toggleRSVPs = adminAction
	.schema(defaultRegistrationToggleSchema)
	.action(async ({ parsedInput: { enabled }, ctx: { user, userId } }) => {
		await redis.set(`${process.env.HK_ENV}_config:registration:allowRSVPs`, enabled);
		revalidatePath("/admin/toggles/registration");
		return { success: true, statusSet: enabled };
	});

export const setRSVPLimit = adminAction
	.schema(defaultRSVPLimitSchema)
	.action(async ({ parsedInput: { rsvpLimit }, ctx: { user, userId } }) => {
		await redis.set(`${process.env.HK_ENV}_config:registration:maxRSVPs`, rsvpLimit);
		revalidatePath("/admin/toggles/registration");
		return { success: true, statusSet: rsvpLimit };
	});

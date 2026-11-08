import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { translate } from "@/lib/language";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the partner application page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/partenaires");

    expect(matches.at(-1)?.routeId).toBe("/partenaires");
  });

  it("translates partner and training page content into English", () => {
    expect(translate("Rejoignez notre réseau d'hébergements.", "en")).toBe("Join our accommodation network.");
    expect(translate("Former aujourd'hui les talents de demain.", "en")).toBe("Developing tomorrow's talent today.");
  });
});

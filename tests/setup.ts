/**
 * Test Setup for AI Agent Specification Tests
 */

// Mock environment variables if needed
process.env.TEST_MODE = 'true';

// Global test utilities
global.describe = global.describe || ((name: string, fn: () => void) => fn());
global.test = global.test || ((name: string, fn: () => void) => fn());
global.expect = global.expect || {
  toBe: (actual: any, expected: any) => {
    if (actual !== expected) {
      throw new Error(`Expected ${expected}, got ${actual}`);
    }
  },
  toEqual: (actual: any, expected: any) => {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    }
  },
  toBeDefined: (actual: any) => {
    if (actual === undefined || actual === null) {
      throw new Error('Expected value to be defined');
    }
  },
  toContain: (actual: string, expected: string) => {
    if (!actual.includes(expected)) {
      throw new Error(`Expected "${actual}" to contain "${expected}"`);
    }
  }
};

// Import test utilities
import { vi } from 'vitest';

// Mock console methods for cleaner test output
global.console = {
  ...console,
  // Uncomment to ignore specific console methods in tests
  // log: vi.fn(),
  // warn: vi.fn(),
  // error: vi.fn(),
};

// Set up test timeouts
vi.setConfig({ testTimeout: 5000 });
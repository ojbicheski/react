import { MemoryRouter } from "react-router-dom";
import ProjectsPage from "../ProjectsPage";
import {
  render,
  screen,
} from "@testing-library/react";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { act } from "react-dom/test-utils";

const queryClient = new QueryClient();

describe("<ProjectsPage />", () => {
  function renderComponent() {

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ProjectsPage />
        </MemoryRouter>
      </QueryClientProvider>
    );
  }

  test("should render without crashing", () => {
    act(() => {
      renderComponent();
    });
    expect(screen).toBeDefined();
  });

  test('should display loading', () => {
    act(() => {
      renderComponent();
    });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('should display projects', async () => {
    act(() => {
      renderComponent();
    });
    expect(await screen.findAllByRole('img')).toHaveLength(
      10
    );
  });
});

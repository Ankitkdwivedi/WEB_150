import java.util.*;

class Solution {
    public int[] shortestDistanceAfterQueries(int n, int[][] queries) {
        List<int[]>[] gr = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            gr[i] = new ArrayList<>();
            if (i < n - 1) {
                gr[i].add(new int[]{i + 1, 1});
            }
        }

        int[] final_ans = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int u = queries[i][0];
            int v = queries[i][1];
            gr[u].add(new int[]{v, 1});
            
            final_ans[i] = solve(gr, n);
        }

        return final_ans;
    }

    private int solve(List<int[]>[] gr, int n) {
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        int[] dt = new int[n];
        Arrays.fill(dt, Integer.MAX_VALUE);
        dt[0] = 0;
        pq.offer(new int[]{0, 0});
        
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int u = curr[0];
            int d = curr[1];
            if (d > dt[u]) continue;
            for (int[] nbr : gr[u]) {
                int v = nbr[0];
                int w = nbr[1];
                
                if (dt[u] + w < dt[v]) {
                    dt[v] = dt[u] + w;
                    pq.offer(new int[]{v, dt[v]});
                }
            }
        }

        return dt[n - 1];
    }

}
